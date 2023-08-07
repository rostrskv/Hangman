import Letter from "./Letter"
/**
 * Component to show the guessed word 
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