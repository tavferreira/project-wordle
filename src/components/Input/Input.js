import React from 'react';

function Input() {
  const [guess,setGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(guess)
    setGuess('')
  }

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input"
    type="text"
    required
    minLength={5}
    maxLength={5}
    pattern="[a-zA-Z]{5}"
    title="5 letter word"
    value={guess}
    onChange={(e) => setGuess(e.target.value.toUpperCase())}/>
</form>;
}

export default Input;
