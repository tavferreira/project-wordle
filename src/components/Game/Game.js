import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'
import Guesses from '../Guesses'
import { checkGuess } from '../../game-helpers';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [result, setResult] = React.useState(null)
  const [numOfGuesses, setNumOfGuesses] = React.useState(0)

  const  handleSubmitGuess = (tentativeGuess)=>  {
    setGuesses([...guesses, checkGuess(tentativeGuess,answer)]);
    const nextNumOfGuesses = numOfGuesses + 1
    setNumOfGuesses(nextNumOfGuesses)

    if(tentativeGuess === answer) {
      setResult('happy') 
      return
    }
    
    if(nextNumOfGuesses === 6) setResult('sad')
  }
    return (
    <>
      <Guesses guesses={guesses} />
      {result && <GameOverBanner result={result} numOfGuesses={numOfGuesses} answer={answer} />}
      <Input handleSubmitGuess={handleSubmitGuess} disabled={!!result} />
    </>);
}

export default Game;
