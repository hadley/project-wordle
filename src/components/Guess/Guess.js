import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  const letters = value === "" ? range(0, 5).map(() => "") : value.split("");

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
