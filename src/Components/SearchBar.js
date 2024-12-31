import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search for a word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchBar;

  