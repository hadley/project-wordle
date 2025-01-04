import React from "react";
import WordGuess from "../WordGuess";
import Guesses from "../Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const initGuesses = Array.from({ length: NUM_OF_GUESSES_ALLOWED }, (i, _) => ({
  value: "",
  id: crypto.randomUUID(),
}));

function Game() {
  const [curGuess, setCurGuess] = React.useState(0);
  const [guesses, setGuesses] = React.useState(initGuesses);

  function addGuess(guess) {
    console.log({ guess });

    const nextGuesses = [...guesses];
    nextGuesses[curGuess].value = guess;
    setGuesses(nextGuesses);

    setCurGuess(curGuess + 1);
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <WordGuess addGuess={addGuess} />
    </>
  );
}

export default Game;
