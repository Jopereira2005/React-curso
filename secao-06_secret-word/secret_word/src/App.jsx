// CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react'

// Data
import { wordsList } from './data/words'

// Components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState();

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }

  // starts  the game
  const startGame = () => {
    // pick word and pick category
    const { category, word } = pickWordAndCategory();

    // creat an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(category, word);
    console.log(wordLetters);


    // fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  // precess the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className='App'>
      {gameStage == "start" && <StartScreen startGame={ startGame }/>}
      {gameStage == "game" && 
        <Game 
          verifyLetter = { verifyLetter }
          pickedWord = { pickedWord }
          pickedCategory = { pickedCategory }
          letters = { letters }
          guessedLetters = { guessedLetters }
          wrongLetters = { wrongLetters }
          guesses = { guesses }
          score = { score }
        />
      }
      {gameStage == "end" && <GameOver retry={ retry }/>}
    </div>
  )
}

export default App
