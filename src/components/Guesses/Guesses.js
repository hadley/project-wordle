import React from "react";
import Guess from "../guess";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, value }) => (
        <Guess key={id} value={value} />
      ))}
    </div>
  );
}

export default Guesses;
