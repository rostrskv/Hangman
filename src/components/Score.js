/**
 * Component to show the remaining guesses
 * @param {Object} params 
 * @param {number} params.score
 */
export default function Score({ score }) {
    return <div className={
        score >= 80 ? "high-score"
            : score >= 50 ? "medium-score"
                : "low-score"
    }>{score}</div>
}