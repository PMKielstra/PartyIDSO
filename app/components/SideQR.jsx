import { QRCode } from "react-qr-code";

import styles from "../styles/SideQR.module.css";

export default function SideQR({qrs, children}) {
    return (
        <div className={styles.SideQR}>
            <div>
                {children}
            </div>
            <div className={styles.qrHolder}>
                {
                    qrs.map(({title, href}, i) => <div className={styles.singleQR} key={i}>
                        <QRCode
                            value={href}
                            bgColor="#0eabd8"
                            fgColor="white" />
                        <div className={styles.qrTitle}>{title}</div>
                    </div>)
                }
                
            </div>
        </div>
    )
}