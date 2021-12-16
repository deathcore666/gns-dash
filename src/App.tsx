import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Home from "./app/pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Itas from "./app/pages/itas/Itas";
import CardInfo from './app/pages/card/cardInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardInfo />} />
        <Route path="/itas" element={<Itas />} />
      </Routes>
    </div>
  );
}

export default App;
