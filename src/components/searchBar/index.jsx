import React, { useState } from 'react';
import s from "./index.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={s.searchBar} onSubmit={handleSubmit}>
      <input
        className={s.inputSearch}
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={s.buttonSearch} type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
