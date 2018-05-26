import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="400px" />
          <p>The boilerplate using: Redux, Observable, React Router Dom.</p>
          <a
            className="App-link"
            href="https://www.codestringers.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeStringers
          </a>
        </header>
      </div>
    );
  }
}

export default App;
