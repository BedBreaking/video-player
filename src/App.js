import React, { useState, useEffect } from "react";
import "./App.css";
import "./assets/common.css";
import Headers from "./common/Header";
import MegaDrive from "./components/MegaDrive";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
function App() {
  return (
    <div
      className="app-main-section"
      style={{
        background: "#000",
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
      }}
    >
      <Router>
        <Headers />
        <Routes>
          <Route path="/mega" element={<MainPage />} />
          <Route path="/" element={<MegaDrive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
