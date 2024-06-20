import React from 'react';

function GameOverBanner({ result, numOfGuesses, answer }) {
  return (
    <div className={`${result} banner`}>
      {result === 'happy' && 
          <p>
            <strong>Congratulations!</strong> Got it in 
            <strong> {numOfGuesses} guesses</strong>.
          </p>
      }
      {result === 'sad' && <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>}
    </div>
  );
}

export default GameOverBanner;
