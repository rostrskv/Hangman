/**
 * Component to show single letter to choose
 */
export default function Letter({ letter, className, selectLetter }) {
    return <span className={className} onClick={()=>selectLetter(letter)}>{letter}</span>
}