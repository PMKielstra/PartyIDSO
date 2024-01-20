import { useState, useEffect } from 'react';

import usePersistentState from '../utils/usePersistentState.js';
import { useSocket } from "../utils/socket.jsx"
import { messages } from "../gamedata/messages.jsx";

import styles from "~/styles/gm.css";

export const meta = () => {
    return [
        { title: "Pantheon Gamemaster" }
    ];
}

export const links = () => {
    return [
        { rel: "stylesheet", href: styles }
    ];
}

const dummyMessages = messages(0);
const puzzlePhases = [...dummyMessages.filter((msg) => ("passphrase" in msg)).map((msg) => msg.phase), dummyMessages.pop().phase];

function puzzleFromPhase(phase) {
    var result = -1;
    [0, ...puzzlePhases].forEach((value, index) => {if (value >= phase && result == -1) result = index});
    return result;
}

export default function GM() {
    const [currentPuzzle, setPuzzle] = usePersistentState(-1, "puzzPhase");
    const [stateSynced, setSync] = useState(false);
    const socket = useSocket();
    const activatePuzzle = (puzzle) => {
        setPuzzle(puzzle + 1);
        socket.emit("phase", puzzlePhases[puzzle]);
    }
    useEffect(() => {
        if (!socket || stateSynced) return;
        socket.on("phase-resp", (phase) => {
            setSync(true);
            setPuzzle(puzzleFromPhase(phase));
        });
        socket.emit("phase-req");
    }, [socket]);
    
    return (
        <>
            <p>There are {puzzlePhases.length} puzzles for players to solve.  To allow for the game to adapt to the ebb and flow of the party, each one is triggered manually.  This is your job, and you can do it from this screen.</p>

            <p>Triggering a later puzzle will block players from completing earlier ones.  There is no penalty for being blocked in this way other than a general loss of satisfaction.</p>
            {
                puzzlePhases.map((puzzle, index) => <button onClick={() => activatePuzzle(index)} key={index} disabled={currentPuzzle != index}>Trigger puzzle {index + 1}</button>)
            }
            <p>Completing the final puzzle allows players to vote on which ending they would prefer.  Once everyone has voted, end the game to watch the outro video.</p>
            <button onClick={() => {setPuzzle(-1); socket.emit("closeout", 0)}} key={puzzlePhases.length} disabled={currentPuzzle != puzzlePhases.length}>End game (will automatically play outro video)</button>
        </>
    )
}