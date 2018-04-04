import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Accounts from './components/accounts/Accounts.jsx';
import Offices from './components/ContainerMap/index';

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
        <Accounts/>
        <Offices/>
      </div>
    );
  }
}

export default App;
