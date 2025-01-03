import React from "react";

function WordGuess({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    addGuess(guess);
    setGuess("");
    event.preventDefault();
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="A guess must be five letters"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default WordGuess;
