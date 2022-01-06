import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Itas from './app/pages/itas/Itas';
import MainMenu from './app/pages/mian-menu/mainMenu';
import { Header } from './app/components/Header';
import CardInfo from './app/pages/card-KKM/cardInfoKkm';
import CardInfoEsf from './app/pages/card-ESF/cardInfoEsf';
import { PrivateRoute } from './app/private-route/privateRoute';
import { SignIn } from './app/components/profile/sign-in';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route  path='/' element={<PrivateRoute/>}>
      <Route path="/home" element={ <MainMenu/> }/>
     
      <Route path="/KKM" element={ <CardInfo/> }/>
      <Route path="/ESF" element={ <CardInfoEsf/> }/>
      <Route path="/itas" element={ <Itas/> }/>
      </Route>
      <Route path="/login" element={ <SignIn/> }/>
    </Routes>
  </div>
  );
}

export default App;
