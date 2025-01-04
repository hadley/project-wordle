import React from "react";

function Banner({ status, answer, numGuesses }) {
  if (status === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else if (status === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

var Hello = <div class="hello">Hello World</div>;
var Alphabet = <div abc="something">Alphabet</div>;

// Invalid aria-* attribute
var IconButton = <div aria-foo="bar" />;

export default Banner;
