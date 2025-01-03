import React from "react";

function WordGuess() {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    console.log(guess);
    setGuess("");
    event.preventDefault();
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="A guess must be five letters"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase().slice(0, 5));
        }}
      />
    </form>
  );
}

export default WordGuess;
