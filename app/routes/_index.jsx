import { useLoaderData } from "@remix-run/react";
import SideQR from "../components/SideQR";
import { getIPv4link } from "../utils/getIP";

export const meta = () => {
    return [
        { title: "Operation Pantheon setup" }
    ];
};

export const loader = async () => {
    return [getIPv4link("gm"), getIPv4link("feature")];
}

export default function Index() {
    const [gmLink, featureLink] = useLoaderData();
    return (
        <SideQR href={gmLink} >
            <h1>Welcome to <span className="i">The Team from Turtle Bay: Operation Pantheon</span>!</h1>
            <p>This game has a number of moving parts:
                <ol>
                    <li>The central server software.  Nobody should directly interact with this.  <span className="b">All other devices involved in the game must be connected to the same WiFi network as the central server.</span></li>
                    <li>The feature display.  This plays opening and closing video clips, makes noise when new puzzles become available, and generally provides the &ldquo;public face&rdquo; of the game.  It should be a laptop or desktop at least, and preferably one connected up to a TV.  To keep things simple, you might as well use the same device for that as you do to run the server.  Two useful tips for immersion:
                        <ul>
                            <li>You might want to hide the browser user interface and let the game take the entire screen; in most browsers, you can toggle fullscreen on and off by pressing F11.</li>
                            <li>You might also want to hide your mouse cursor.  To do this, just move it over the QR code and it will disappear.  Move it away and it will reappear if you need it again.  (You will need to click on videos to play them, so be aware of that.)</li>
                        </ul>
                        
                        </li>
                    <li>The gamemaster's device.  This is for the person who runs the game, which requires social ability but no technical skill.  <span className="b">Set up the gamemaster's device now.  You will not get another chance.</span>  To do this, scan the QR code to the right to go to the gamemaster's super secret game control web page.</li>
                    <li>The players' devices.  Players will be able to join the game at any point once it has started.</li>
                </ol>
            </p>
            <p>If, for some reason, people are failing to connect to the server, make sure that they're on the right WiFi network.</p>
            <p>Once you're ready, <a href={featureLink}>click here</a> to show the feature display (or, if you'd rather do that on another device, point its browser to <a href={featureLink}>{featureLink}</a>).</p>
        </SideQR>
    );
}
