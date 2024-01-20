import { useState } from "react";

export default function Accordion({title, author, read, onRead, children}) {
    const [open, setOpen] = useState(false);
    return (<div className="accordion">
        <header onClick={() => {onRead(); setOpen(!open);}}>
            <div className={"accordionTitle " + (read ? "" : "unread")}>
                <h1>{title}</h1>
                <h2>{author}</h2>
            </div>
            <img className="accordionButton" src="/img/arrow.svg" style={{transform: (open ? "rotate(180deg)" : "")}} />
        </header>
        <section style={{maxHeight: (open ? "" : "0")}}>
            {children}
        </section>
    </div>)
}