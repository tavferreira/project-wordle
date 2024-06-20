import React from 'react';

function Input({handleSubmitGuess}) {
  const [tentativeGuess,setTentativeGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setTentativeGuess('')

    handleSubmitGuess(tentativeGuess)
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
    value={tentativeGuess}
    onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}/>
</form>;
}

export default Input;
