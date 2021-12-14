import React from 'react';
import './App.css';
import LineChart from "./app/components/lineChart/LineChart";
import { BarChart } from './app/components/barChart/BarChart';

function App() {
  return (
    <div className="App">
      <LineChart/>
      <BarChart/>
    </div>
  );
}

export default App;
