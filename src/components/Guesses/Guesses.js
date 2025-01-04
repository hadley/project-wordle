import React from "react";

function Guesses({ guesses }) {
  function showGuess(value) {
    const letters =
      value === "" ? Array.from({ length: 5 }, () => "") : Array.from(value);
    return letters.map((letter, index) => (
      <span class="cell" key={index}>
        {letter}
      </span>
    ));
  }

  return (
    <div className="guess-results">
      {guesses.map(({ id, value }) => (
        <p className="guess" key={id}>
          {showGuess(value)}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
