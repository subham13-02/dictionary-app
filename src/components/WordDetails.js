// components/WordDetails.js
import React from 'react';
import { useSelector } from 'react-redux';

const WordDetails = () => {
  const wordData = useSelector((state) => state.word.wordData);

  return (
    <div>
      {wordData ? (
        <div>
          {/* Display word details here */}
        </div>
      ) : (
        <p>No word details available.</p>
      )}
    </div>
  );
};

export default WordDetails;
