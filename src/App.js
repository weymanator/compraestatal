import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import Caroucel from './components/caroucel';
import Menu from './components/menu';
import Cards from './components/cards';
import RegisterButton from './components/registerButton';
import './App.css';
import 'material-design-icons';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Caroucel />
      <Menu />
      <Cards />
      <RegisterButton />
    </div>
  );
}

export default App;
