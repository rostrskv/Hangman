/**
 * Component to show the guessed word 
 * @param {Object} params 
 * @param {Array<string>} params.word 
 * @param {string} params.tip 
 */
export default function Solution({ word, tip }) {
    return (
        <div>
            {word.map(
                (letter, index) =>
                    <span key={index}>{letter} </span>
            )}
            <div>
                <em>{tip}</em>
            </div>
        </div>
    )
}