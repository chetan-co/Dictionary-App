import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/WordDetails';
import WordDetails from './Components/Header';
import './App.css';

function App() {
  const [wordData, setWordData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchWordData = async (word) => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setWordData(response.data[0]);
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      console.error('Error fetching the word data:', error);
      setWordData(null);
      setErrorMessage('Word not found! Please try a different word.');
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Dictionary App</h1>
      </header>
      <SearchBar onSearch={fetchWordData} />
      {errorMessage ? (
        <div className="error-message">{errorMessage}</div>
      ) : (
        <WordDetails wordData={wordData} />
      )}
    </div>
  );
}

export default App;
