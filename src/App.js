import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VendingMachine from './components/VendingMachine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>The Vendo Choco</h1>
        </div>
        <VendingMachine />
      </div>
    );
  }
}

export default App;
