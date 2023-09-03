// components/Search.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWord } from '../actions/wordActions';
import { addToHistory } from '../actions/historyActions';

const Search = () => {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchWord(searchWord));
    dispatch(addToHistory(searchWord));
    setSearchWord('');
  };

  return (
    <div>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
