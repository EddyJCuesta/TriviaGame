import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import TriviaList from './components/TriviaList';
import LandingPage from './components/LandingPage';

function App() {
  const [questions, setQuestions] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

  useEffect(() => {
    if (gameStarted) {
      axios({
        url: `https://opentdb.com/api.php?amount=10&category=29&difficulty=${selectedDifficulty}`,
        method: 'GET',
        responseType: 'json',
        params: {},
      })
        .then((res) => {
          setQuestions(res.data.results); // Update the state with fetched questions
          console.log(res.data.results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [gameStarted, selectedDifficulty]);

  const handleStartGame = (difficulty) => {
    setGameStarted(true);
    setSelectedDifficulty(difficulty);
  };

  return (
    <div className="App">
      <h1>Trivia</h1>
      {gameStarted ? (
        <TriviaList questions={questions} />
      ) : (
        <LandingPage onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
