import React, { Component } from 'react';
import './App.css';
import Navbar from '../src/components/navbar/Navbar.js';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Login/>
      </div>
    );
  }
}

export default App;
