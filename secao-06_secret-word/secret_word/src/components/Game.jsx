import './Game.css'

const Game = ({ 
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {
  return (
    <div className="game">
      <p className="points">
          <span>Pontuação: { score }</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sovre a palavra: <span>{ pickedCategory }</span>
      </h3>
      <p>Você ainda tem { guesses } tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) => 
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span className="blankSquare"></span>
          )
        )}
          <span className="letter">A</span> 
          <span className="blankSquare"></span>   

      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button onClick={ verifyLetter }>Jogar</button>
        </form>
      </div>
      <div className="worgLettersContainer">
        <p>Letra já utilizadas:</p>
        <span>a</span>
        <span>b</span>
      </div>
      <h1>Game</h1>
    </div>
  )
}

export default Game