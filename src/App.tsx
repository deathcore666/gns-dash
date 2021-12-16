import React from 'react';
import './App.css';
import Home from "./app/pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Itas from "./app/pages/itas/Itas";
import MainMenu from './app/pages/mian-menu/mainMenu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/itas" element={<Itas />} />
      </Routes>
    </div>
  );
}

export default App;
