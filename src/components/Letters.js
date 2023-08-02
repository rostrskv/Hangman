import Letter from "./Letter";
/**
 * Component to show the letters to choose
 */
export default function Letters() {
    return (
        <div>
            <div>Available letters</div>
            <Letter letter="a" />
        </div>
    );
}