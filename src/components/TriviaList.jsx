import React from 'react';
import TriviaCard from './TriviaCard';

function TriviaList({ questions }) {
  return (
    <div>
      {questions.map((question, index) => (
        <TriviaCard key={index} question={question} />
      ))}
    </div>
  );
}

export default TriviaList;
