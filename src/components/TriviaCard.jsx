import React from 'react';

function TriviaCard({ question }) {
  const { question: questionText, correct_answer, incorrect_answers } = question;

  const allAnswers = [...incorrect_answers, correct_answer];

  return (
    <div>
      <h3>{questionText}</h3>
      <ul>
        {allAnswers.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default TriviaCard;
