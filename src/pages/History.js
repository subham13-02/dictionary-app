import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  // taking history from redux state
  let History = useSelector((state) => state.history);
  console.log(History);

  return (
    <div className="historyPage">
      <h1 className="history-heading">HISTORY</h1>

      {console.log(History)}
      {/* if history is present then rendering it's data with conditions */}
      {History[0] &&
        History.map((item) => (
          <div className="history-container">
            <h3 className="Hword">{History[0] && item.word}</h3>
            <b>Meanings:</b>
            <br />
            <span className="Hpos">
              {History[0] && item.meanings[0].partOfSpeech + ": "}
            </span>
            <span className="meaning">
              {History[0] && item.meanings[0].definitions[0].definition}
            </span>
            <br />
          </div>
        ))}
    </div>
  );
};

export default History;