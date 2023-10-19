import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    axios({
      url: "https://opentdb.com/api.php?amount=10&category=29",
      method: "GET",
      responseType: "json", // Corrected this line
      params: {},
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  return (
    <>
      <h1>Trivia</h1>
    </>
  );
}

export default App;
