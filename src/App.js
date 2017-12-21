import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Journey } from './Journey';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Journey />
      </div>
    );
  };
}

export default App;
