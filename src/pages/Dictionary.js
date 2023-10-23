import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTohistory } from "../redux/historySlice";

const Dictionary = () => {
  // state variables
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  let alrt = "";

  const searchDictionary = (e) => {
    e.preventDefault();
    //fetching data through given search term
    fetch(`${process.env.URL}${searchTerm}`)
      .then((res) => res.json())
      .then((response) => {
        // setting data to state
        setData(response[0]);

        // fetch result gives single object and title in it,
        // while there is no match found according to searchTerm
        if (response.title) {
          // if no such word in dictionary
          setError(true);
          alert("Results Not Found!");
        } else {
          // else it gives array of objects, so setting data to redux cart slice
          dispatch(addTohistory(response[0]));
          setSubmit(true);
        }
      })
      // error handling
      .catch((error) => {
        setSubmit(false);
        console.log("Error -> ", error);
      });
  };

  return (
    <div>
      {/* search box section */}
      <main id="main">
        <div className="search-bar">
          <form onSubmit={searchDictionary}>
            <input
              id="search-bar"
              type="text"
              placeholder="Search word.."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button id="search-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </main>

      {/* result section */}
      {/* if word is not submitted till now saying to search */}
      {!submit ? (
        <h3 style={{ textAlign: "center" }}> Hey! Search for Word 👋</h3>
      ) : (
        // if submitted and there is no error in error state then rendering data
        <section className="details-container">
          <div className="definition">
            <h2 className="word">
              {alrt}
              {!error && data.word}
            </h2>
            <div className="audio-container">
              {!error && data.phonetics && (
                <div key={"au1"} className="audio-div">
                  <h2 className="heading">
                    {!error &&
                      data.phonetics[data.phonetics.length - 1].text.replaceAll(
                        "/",
                        ""
                      )}
                  </h2>
                  <audio
                    id="audio-bar"
                    src={
                      !error && data.phonetics[data.phonetics.length - 1].audio
                    }
                    controls
                  />
                </div>
              )}
            </div>
          </div>
          <div className="meanings">
            {!error &&
              data.meanings &&
              data.meanings.map((defi, index) => (
                <div key={index} className="noun-div">
                  <h3 className="pos">{!error && defi.partOfSpeech}</h3>
                  <p className="definition">
                    {" "}
                    <b>Definition: </b>
                    {!error && defi.definitions[0].definition}
                  </p>
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Dictionary;