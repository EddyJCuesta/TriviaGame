import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import TriviaList from './components/TriviaList';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios({
      url: "https://opentdb.com/api.php?amount=10&category=29",
      method: "GET",
      responseType: "json",
      params: {},
    })
      .then((res) => {
        setQuestions(res.data.results); // Update the state with fetched questions
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Trivia</h1>
      <TriviaList questions={questions} />
    </div>
  );
}

export default App;
