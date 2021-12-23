import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Itas from './app/pages/itas/Itas';
import MainMenu from './app/pages/mian-menu/mainMenu';
import { Header } from './app/components/Header';
import CardInfo from './app/pages/card-KKM/cardInfoKkm';
import CardInfoEsf from './app/pages/card-ESF/cardInfoEsf';
import Edeclaration from './app/pages/edeclaration/edeclaration';

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={ <MainMenu/> }/>
          <Route path="/KKM" element={ <CardInfo/> }/>
          <Route path="/ESF" element={ <CardInfoEsf/> }/>
          <Route path="/Edeclaration" element={ <Edeclaration/> }/>
          <Route path="/itas" element={ <Itas/> }/>
        </Routes>
      </div>
  );
}

export default App;
