import React, { Component } from 'react';
import './App.css';
import Login from './pages/home/'
import 'babel-polyfill';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Login />
        </main>
      </div>
    );
  }
}

export default App;
