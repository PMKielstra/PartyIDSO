export const firewall_names = ["BH91", "CC31", "CO84", "DD58", "DX96", "DZ75", "EY56", "EZ64", "FR467", "HS94", "IA576", "IH610", "IL164", "JQ418", "JU95", "JW819", "KK477", "KR046", "LG312", "LX567", "MI463", "NL51", "NN689", "OL345", "OY564", "PA16", "PH471", "QA63", "QB16", "QC00", "RB240", "RM19", "RT532", "SE48", "TC576", "TG646", "TI49", "TZ630", "UU85", "VB545", "VD978", "VS942", "WZ970", "XX813", "YH840", "ZB833", "ZP04"];
export const firewall_ports = ["7762", "1249", "1899", "4501", "2940", "5012", "8446", "1230", "6311", "7679", "5785", "6282", "1859", "5108", "4590", "3904", "9423", "5641", "758", "2201", "1837", "5966", "1218", "9275", "9221", "7210", "4408", "3995", "4606", "5279", "648", "9100", "7094", "5116", "8431", "3641", "5529", "8660", "4580", "3225", "3374", "2925", "4908", "3171", "6062", "4554", "1776"];

export const n_firewalls = firewall_names.length;
if (n_firewalls != firewall_ports.length) {
    console.log("Potential error: firewall names and ports don't match");
}