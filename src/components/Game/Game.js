import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'
import Guesses from '../Guesses'
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const  handleSubmitGuess = (tentativeGuess)=>  {
    setGuesses([...guesses, checkGuess(tentativeGuess,answer)]);
  }
    return (
    <>
      <Guesses guesses={guesses} />
      <Input handleSubmitGuess={handleSubmitGuess} />
    </>);
}

export default Game;
