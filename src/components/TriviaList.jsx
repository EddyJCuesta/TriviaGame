import React, { useState } from 'react';
import TriviaCard from './TriviaCard';

function TriviaList({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      {currentIndex < questions.length ? (
        <TriviaCard
          question={questions[currentIndex]}
          onAnswerSelect={handleAnswerSelect}
        />
      ) : (
        <div>
          <h2>Trivia Completed!</h2>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
}

export default TriviaList;
