import { useState } from "react";

import { n_firewalls, firewall_names, firewall_ports } from "../gamedata/firewalls.js";
import { seeded_random_permutation } from "../utils/seededRandom.js";

export default function FirewallPuzzle({firewallId, onSuccess, onError}) {
    const firewall_name = firewall_names[firewallId];
    const firewall_port = firewall_ports[firewallId];
    const bad_ports = Array(3).fill()
        .map(() => Math.floor((n_firewalls - 1) * Math.random()))
        .map((x) => x < firewallId ? x : x + 1)
        .map((id) => firewall_ports[id]);
    const [randomized_ports, _set_ports] = useState(seeded_random_permutation(1000 * Math.random(), [firewall_port].concat(bad_ports)));
    return (<>
        <div className="firewallName">Encountered model {firewall_name} firewall.  Select from potential vulnerable ports:</div>
        <div className="firewallButtons">
            {randomized_ports.map((port, id) => <button key={id} onClick={port == firewall_port ? onSuccess : onError}>{port}</button>)}
        </div>
    </>)
}