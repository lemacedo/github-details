import React, { Component } from 'react';

import api from "./services/api"

import './styles.css';

import Header from './components/header/index';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header/>
    <Main/>
  </div>
)

export default App;
