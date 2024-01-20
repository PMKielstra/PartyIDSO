import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

import pkg from 'react-timer-hook';
const { useTimer } = pkg;
import FirewallPuzzle from "./FirewallPuzzle.jsx";
import { payloads } from "../gamedata/payloads.js";
import { n_firewalls } from "../gamedata/firewalls.js";

const toastOptions = {position: 'bottom-center'}
const firewallsToBreak = 5;
const hackTimeSeconds = 45;

function getEndTime() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + hackTimeSeconds);
    return time;
}

function disabledHacktool(message) {
    return (<div className="hacktool">
                    <div className="accordion">
                        <p>{message}</p>
                    </div>
                </div>)
}

export default function Hacktool({active, completed, onComplete}) {
    if (completed && false) {
        return disabledHacktool("Hack complete.");
    }
    if (!active) {
        return disabledHacktool("We do not yet have enough information to activate the hacktool.");
    }
    const [firewallIds, setFirewallIds] = useState(Array(firewallsToBreak).fill())
    function resetGame() {
        setFirewallIds(Array(firewallsToBreak).fill().map(() => Math.floor(n_firewalls * Math.random())))
    }
    const [hackPhase, setHackPhase] = useState(0);
    
    const timer = useTimer({expiryTimestamp: new Date(), autoStart: false, onExpire: onExpire });
    useEffect(() => timer.restart(getEndTime(), false), []);
    
    function onExpire() {
        setHackPhase(0);
        toast.error("Time ran out; connection lost.", toastOptions);
        timer.restart(getEndTime(), false);
    }
    function onFailure() {
        toast.error("Intrusion detected; connection lost.", toastOptions);
        timer.restart(getEndTime(), false);
        timer.pause();
        setHackPhase(0);
    }
    function onSuccess() {
        if (hackPhase == 0) {
            resetGame();
            timer.restart(getEndTime());
        } else {
            toast.success("Firewall bypassed!", toastOptions);
        }
        if (hackPhase == firewallsToBreak) {
            timer.pause();
        }
        setHackPhase(hackPhase + 1);
    }

    const phases =
        [<>
            <div className="firewallName">Warning: navigating away from the hacktool will cancel the hack attempt.</div>
            <button onClick={onSuccess}>Start hack attempt</button>
        </>]
        .concat(firewallIds.map((id, index) => <FirewallPuzzle key={index} firewallId={id} onSuccess={onSuccess} onError={onFailure} />))
        .concat([<>
            <div className="firewallName">Select payload:</div>
            {payloads.map(({color, effect, bgcol}, index) => <button key={index} onClick={() => onComplete(index)}>Upload <span className="colorSpan" style={{"background-color": bgcol}}>{color.toUpperCase()}</span> payload<br />({effect})</button>)}
        </>]);
    
    return <div className="hacktool">
        <Toaster />
        <div className="accordion">
        <div className="timer">Time remaining: {timer.minutes}:{timer.seconds.toLocaleString("en-US", {minimumIntegerDigits: 2})}</div>
        {phases[hackPhase]}
        </div>
        </div>

}