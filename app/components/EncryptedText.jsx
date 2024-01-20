import { random_alphabet, random_letters } from "../utils/seededRandom"

export default function EncryptedText({seed, text, n_letters}) {
    const key = random_alphabet(seed);
    const show_letters = random_letters(seed, n_letters);
    function get_enc_letter(l) {
        const res = key.get(l.toUpperCase())
        return res == undefined ? l : res
    }

    const enc_text = text.split("").map(get_enc_letter).join("");
    function show_letter(l) {
        return <td>{key.get(l.toUpperCase())} -&gt; {l.toLowerCase()}</td>
    }

    return (<div className="encrypted">
        <p>{enc_text.toUpperCase()}</p>
        <h3>IDSO Automated Decryption suggests:</h3>
        <table>
            <tbody>
                {show_letters.slice(n_letters / 2).map((elt, i) => <tr key={i}>{show_letter(elt)}{show_letter(show_letters[i])}</tr>)}
            </tbody>
        </table>
    </div>)
}