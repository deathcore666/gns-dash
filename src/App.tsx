import React from 'react';
import './App.css';
// import LineChart from "./app/components/lineChart/LineChart";
// import { BarChart } from './app/components/barChart/BarChart';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*<LineChart/>*/}
      {/*<BarChart/>*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
