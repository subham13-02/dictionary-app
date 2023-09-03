// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import History from './components/History';
import Navbar from './components/Navbar';
import WordDetails from './components/WordDetails';
import Loader from './components/Loader';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        
        <Routes>
          <Route exact path="/" element={<Search />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/word/:word" element={<WordDetails />}></Route>
        </Routes>
      </main>
      <Loader />
    </div>
  );
};

export default App;
