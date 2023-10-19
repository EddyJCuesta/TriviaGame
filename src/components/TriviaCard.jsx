import React, { useState } from 'react';

function TriviaCard({ question, onAnswerSelect }) {
  const { question: questionText, correct_answer, incorrect_answers } = question;

  const allAnswers = [...incorrect_answers, correct_answer];
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    onAnswerSelect(option === correct_answer);
  };

  const decodedQuestion = new DOMParser().parseFromString(questionText, 'text/html').body.textContent;

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: decodedQuestion }} />
      <ul>
        {allAnswers.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            className={selectedAnswer === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TriviaCard;
