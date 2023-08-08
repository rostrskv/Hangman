/**
 * Component to show single letter to choose
 * @param {Object} props 
 * @param {string} props.letter 
 * @param {string} props.className 
 * @param {(letter: string) => void} props.selectLetter
 */
export default function Letter({ letter, className, selectLetter = () => { } }) {
    return <span className={className} onClick={() => selectLetter(letter)}>{letter}</span>
}