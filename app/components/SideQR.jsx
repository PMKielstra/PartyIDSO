import { QRCode } from "react-qr-code";

import styles from "../styles/SideQR.module.css";

export default function SideQR({href, children}) {
    return (
        <div className={styles.SideQR}>
            <div>
                {children}
            </div>
            <div className={styles.qrHolder}>
                <QRCode
                    value={href}
                    bgColor="#009edb"
                    fgColor="white" />
            </div>
        </div>
    )
}