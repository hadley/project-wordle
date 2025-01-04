import React from "react";
import { checkGuess } from "../../game-helpers";

const emptyGuess = [
  { letter: " ", status: "" },
  { letter: " ", status: "" },
  { letter: " ", status: "" },
  { letter: " ", status: "" },
  { letter: " ", status: "" },
];

function Guess({ value, answer }) {
  console.log({ value, answer });
  const checked = value === "" ? emptyGuess : checkGuess(value, answer);

  return (
    <p className="guess">
      {checked.map(({ status, letter }, index) => (
        <span className={`cell ${status}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
