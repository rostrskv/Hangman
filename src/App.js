import { useState } from 'react';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';

function App() {
  const generateLetterStatuses = () => {
    let letters = {}
    for (let char = "A"; char <= "Z"; char = String.fromCodePoint(char.codePointAt() + 1)) {
      letters[char] = false
    }
    return letters
  }
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses())
  const [solution, setSolution] = useState({
    word: "CALM",
    hint: "Your ideal mood when coding"
  })
  const [score, setScore] = useState(100)
  const selectLetter = (letter) => {
    setLetterStatus({ ...letterStatus, [letter]: true })
    setScore(score + (solution.word.includes(letter) ? 5 : -20))
  }
  return (
    <div >
      <Score score={score} />
      <Solution
        letterStatus={letterStatus}
        solution={solution}
      />
      <Letters letterStatus={letterStatus} selectLetter={selectLetter} />
    </div>
  );
}

export default App;

