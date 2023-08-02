import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';

function App() {
  return (
    <div >
      <Score score={100} />
      <Solution
        word={["_", "_", "_", "_"]}
        tip="Your ideal mood when coding" />
      <Letters />
    </div>
  );
}

export default App;
