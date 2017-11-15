import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mockData from './mockData';
import Tree from './components/Tree/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Tree data={mockData} />
        </main>
      </div>
    );
  }
}

export default App;
