import toast, { Toaster } from 'react-hot-toast';

import Accordion from "./Accordion"
import InputPuzzle from "./InputPuzzle"

const toastOptions = {position: 'bottom-center'}

export default function MessageDisplay({phase, bumpPhase, messages, read, onRead}) {
    return (<>
    <Toaster />
    <div className="messages">
        {messages.map((message, index) => 
            <Accordion
                title={message.title}
                author={message.author}
                read={read[index]}
                onRead={() => onRead(index)}
                key={index}>
                    {message.content}
                    {"passphrase" in message ? 
                        (<InputPuzzle 
                        enabled={phase == message.phase}
                        correctAnswer={message.passphrase}
                        onIncorrect={() => toast.error("IDSO automatic analyst rejects answer", toastOptions)}
                        onCorrect={() => {
                            toast.success("IDSO automatic analyst accepts answer", toastOptions);
                            bumpPhase(message.phase + 1);
                        }}/>)
                    : (<></>)}
            </Accordion>).toReversed()}
    </div>
    </>)
}