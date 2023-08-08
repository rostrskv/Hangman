import Letter from "./Letter"
/**
 * Component to show the guessed word 
 * @param {Object} props 
 * @param {Object.<string, boolean>} props.letterStatus 
 * @param {{word:string, hint:string}} props.solution 
 */
export default function Solution({ letterStatus, solution }) {
    return (
        <div>
            {[...solution.word].map(
                (letter, index) =>
                    letterStatus[letter]
                        ? <Letter key={index} letter={letter} />
                        : <Letter key={index} letter="_ " />
            )}
            <div>
                <em>{solution.hint}</em>
            </div>
        </div>
    )
}