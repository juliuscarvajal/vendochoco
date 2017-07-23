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
        <p className="App-intro">
          To get started, insert your hard earned coins then choose from the wide range of chocolates on display.
        </p>
        <VendingMachine />
      </div>
    );
  }
}

export default App;
