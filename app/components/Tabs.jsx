import { useState } from "react";

import styles from "../styles/Tabs.module.css"

export default function Tabs({names, pages}) {
    const [tab, setTab] = useState(0);
    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabDisplay}>
                { pages[tab] }
            </div> 
            <div className={styles.tabs}>
                { names.map((name, idx) =>
                    <div
                        key={idx}
                        className={idx == tab ? styles.activeTab : ""}
                        onClick={() => setTab(idx)}>
                            {name}
                    </div>) }
            </div>
        </div>
    )
}