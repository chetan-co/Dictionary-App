import React from 'react';

function WordDetails({ wordData }) {
  if (!wordData) return null;

  return (
    <div className="word-details">
      <h2>{wordData.word}</h2>
      {wordData.meanings.map((meaning, index) => (
        <div key={index} className="meaning-section">
          <h3>{meaning.partOfSpeech}</h3>
          <ul>
            {meaning.definitions.map((def, idx) => (
              <li key={idx}>
                {def.definition}
                {def.example && <p><em>Example: {def.example}</em></p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default WordDetails;
