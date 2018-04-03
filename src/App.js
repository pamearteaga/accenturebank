import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Accounts from './components/accounts/Accounts.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
        <Accounts/>
      </div>
    );
  }
}

export default App;
