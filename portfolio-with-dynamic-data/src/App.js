// src/App.js

import React from 'react';
import Header from './components/header/Header';
import Main from './components/Main';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
