import { networkInterfaces } from "os";

import wifiName from "wifi-name";

function getIPs() {
    const interfaces = networkInterfaces();
    var ips = [];
    Object.values(interfaces).forEach(
            (intf) => {intf.forEach((a) => {if (!a.internal) ips.push(a)})}
        );
    return ips;
}

export function getIPv4addr() {
    const port = process.env.PORT || 3000
    return getIPs().filter((ip) => ip.family == "IPv4")[0].address + ":" + port;
}

export function getIPv4link(path="", https=false) {
    return `http${https ? "s" : ""}://${getIPv4addr()}/${path}`;
}

export function getWifiName() {
    return wifiName.sync();
}