import React from 'react';
import './App.css';
<<<<<<< HEAD
import { Header } from './features/Header/Header';

function App() {
  return (
    <div>
      <Header/>
=======
import Home from "./app/pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
>>>>>>> 09ece72c86aaefa5580fcf37145c3bc133a675d0
    </div>
  );
}

export default App;