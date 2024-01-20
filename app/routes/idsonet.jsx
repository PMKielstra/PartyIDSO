import { useEffect } from 'react';

import { messages } from "../gamedata/messages";
import MessageDisplay from "../components/MessageDisplay";
import Hacktool from "../components/Hacktool";
import Tabs from "../components/Tabs";
import { useSocket } from "../utils/socket.jsx"
import usePersistentState from "../utils/usePersistentState.js";

import styles from "~/styles/idsonet.css";

export const meta = () => {
    return [
        { title: "IDSONet" }
    ];
}

export const links = () => {
    return [
        { rel: "stylesheet", href: styles }
    ];
}

export default function IDSONet() {
    const [phase, setPhase] = usePersistentState(0, "phase");
    const [seed, setSeed] = usePersistentState(Math.random() * 1000, "seed");
    const bumpableMessages = messages(seed);
    const [read, setRead] = usePersistentState(bumpableMessages.map(() => false), "read");
    const [hacktoolCompleted, setHacktoolCompleted] = usePersistentState(false);
    function onRead(index) {
        var newRead = [...read];
        newRead[index] = true;
        setRead(newRead);
    }
    function bumpPhase(newPhase) {
        if (newPhase > phase) {
            setPhase(newPhase);
        }
    }

    const socket = useSocket();
    useEffect(() => {
        if (!socket) return;
        socket.on("phase-bump", (data) => bumpPhase(data));
    }, [socket]);

    return (
    <Tabs names={["Messages", "Hacktool"]} pages={[
    <MessageDisplay
        phase={phase}
        bumpPhase={(p) => {if (p > phase) setPhase(p)}}
        messages={bumpableMessages.filter((msg) => (msg.phase <= phase))}
        read={read}
        onRead={onRead}
        />,
    <Hacktool
        active={phase == bumpableMessages[bumpableMessages.length - 1].phase}
        completed={hacktoolCompleted}
        onComplete={(vote) => {
            socket.emit("vote", vote);
            setHacktoolCompleted(true);
        }}
        />
    ]} />)

}