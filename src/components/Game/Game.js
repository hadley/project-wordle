import React from "react";
import WordGuess from "../WordGuess";
import Guesses from "../Guesses";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    console.log({ guess });
    const nextGuess = { value: guess, id: crypto.randomUUID() };
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <WordGuess addGuess={addGuess} />
    </>
  );
}

export default Game;
