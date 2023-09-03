// components/History.js
import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
  const history = useSelector((state) => state.history.history);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
