import React, { useState } from 'react';


function LandingPage({ onStartGame }) {
  const [difficulty, setDifficulty] = useState('easy');

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const startGame = () => {
    onStartGame(difficulty);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Trivia!</h1>
      <p>Test your knowledge with a fun trivia game. Select the difficulty level and start answering questions.</p>
      <form>
        <label>
          Select Difficulty:
          <select value={difficulty} onChange={handleDifficultyChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </form>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default LandingPage;
