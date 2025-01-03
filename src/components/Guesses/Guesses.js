import React from "react";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, value }) => (
        <p className="guess" key={id}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
