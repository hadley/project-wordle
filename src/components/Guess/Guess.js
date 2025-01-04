import React from "react";

function Guess({ key, value }) {
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
    <p className="guess" key={key}>
      {showGuess(value)}
    </p>
  );
}

export default Guess;
