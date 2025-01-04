import React from "react";
import Guess from "../guess";

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, value }) => (
        <Guess key={id} value={value} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;
