import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./pages/History";
import Dictionary from "./pages/Dictionary";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dictionary />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;