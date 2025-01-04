import React from "react";

function Guess({ value }) {
  return (
    <p className="guess">
      {value.split("").map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
