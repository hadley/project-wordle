import Game from "../Game";
import Header from "../Header";
import WordGuess from "../WordGuess";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <WordGuess />
      </div>
    </div>
  );
}

export default App;
