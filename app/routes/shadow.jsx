import { messages } from "../gamedata/shadowmessages";

import styles from "~/styles/shadow.css";

export const meta = () => {
    return [
        { title: "Shadow" }
    ];
}

export const links = () => {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "shortcut icon", href: "/img/shadowfavicon.ico"}

    ];
}

export default function Shadow() {
    return (<>
        <header>
            <img src="/img/wireghost.svg" />
            <div>
            <h1>wireghost</h1>
            <h2>ask me about alyosha</h2>
            </div>
        </header>
        {
            messages.map(
                (thread, key) => <section key={key}>
                    {
                        thread.map(
                            ({from, content, attachment}, tkey) => <div className="tweet" key={tkey}>
                                <div className="author">{from}</div>
                                <div className="content">{content}</div>
                                {
                                    attachment ? <div className="attachment"><a href={"/attachments/" + attachment}>{attachment}</a></div> : null
                                }
                            </div>
                        )
                    }
                </section>
            )
        }
    </>)
}