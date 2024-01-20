export default function InputPuzzle({enabled, correctAnswer, onCorrect, onIncorrect}){
    function check(e) {
        e.preventDefault()
        if (e.target.children[0].value.toLowerCase() == correctAnswer.toLowerCase()) {
            onCorrect();
        } else {
            onIncorrect();
        }
    }
    return (<form className="inputPuzzle" onSubmit={check}>
        <input type="text" disabled={!enabled}/>
        <button type="submit" disabled={!enabled}>Submit</button>
    </form>)
}