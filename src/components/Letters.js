import Letter from "./Letter";
/**
 * Component to show the letters to choose
 */
export default function Letters({ letterStatus, selectLetter }) {
    return (
        <div>
            <div>Available letters</div>
            {
                Object.entries(letterStatus).map(([letter, status]) => (
                    <Letter selectLetter={selectLetter} key={letter} letter={letter} className={
                        status ? "selected" : "non-selected"
                    } />
                ))
            }

        </div>
    );
}