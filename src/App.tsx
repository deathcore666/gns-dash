import React from 'react';
import './App.css';
import LineChart from "./features/lineChart/LineChart";
import { BarChart } from './features/barChart/BarChart';

function App() {
  return (
    <div className="App">
      {/*<LineChart/>*/}
      <BarChart/>
    </div>
  );
}

export default App;
