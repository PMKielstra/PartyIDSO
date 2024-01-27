import { useLoaderData } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from 'react-player';
import { useSearchParams } from "@remix-run/react";

import SideQR from "../components/SideQR";
import { useSocket } from "../utils/socket.jsx"
import { getIPv4link } from "../utils/getIP";
import { payloads } from "../gamedata/payloads";

export const meta = () => {
    return [
        { title: "Operation Pantheon" }
    ];
};

export const loader = async () => {
    return getIPv4link("idsonet");
}

function argmax(a) {
    var am = 0;
    for(var i = 1; i < a.length; i++) {
        if (a[i] > a[am]) am = i;
    }
    return am;
}

const alertAudio = "/aud/alert.mp3";

export default function Index() {
    const idsoLink = useLoaderData();
    const [searchParams, _setSearchParams] = useSearchParams();
    const socket = useSocket();
    const votes = useRef([0, 0, 0]);
    const [vid, setVid] = useState("/vid/intro.webm");
    const [alert] = useState(typeof(Audio) != "undefined" && new Audio(alertAudio));
    const [playing, setPlaying] = useState(false);
    var player = null;
    useEffect(() => {
        if (!socket) return;
        socket.on("phase-bump", () => {
            alert.play();
        })
        socket.on("vote-cast", (vote) => {
            votes.current[vote] += 1
        });
        socket.on("closeout-play", () => {
            const winningVote = argmax(votes.current);
            console.log("Winning vote " + winningVote);
            player.seekTo(0);
            setVid(payloads[winningVote].video);
            setPlaying(true);
        });
    }, [socket]);
    var qrs = [{title: "Register device", href: idsoLink}];
    if (searchParams.has("name")) {
        qrs = [{title: "Connect to WiFi network (scan this one first!)", href: `WIFI:S:${searchParams.get("name")};T:WPA;P:${searchParams.get("pw")};;`}, qrs[0]];
    }
    return (
        <SideQR qrs={qrs} >
            <ReactPlayer.default
                ref={(p) => (player = p)}
                width="100%"
                height="100%"
                controls={true}
                playing={playing}
                url={vid}
            />
        </SideQR>
    );
}
