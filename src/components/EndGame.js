export default function EndGame({ hasWon, word }) {
    return (
        hasWon
            ? <div><span className="emoji">&#x1F3C6;</span> Congratulations!</div>
            : <div><span className="emoji">&#x1FAA2;</span> You have lost. The word was "{word}"</div>
    )
}