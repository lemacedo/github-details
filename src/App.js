import React, { Component } from 'react';

import Routes from './routes';

import './styles.css';

import Header from './components/header/index';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header/>
    <Routes/>
  </div>
)

export default App;
