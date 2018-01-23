import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Journey } from './Journey';
import { Map } from './Map';

class App extends Component {
  render() {
    return (
      <div>
      <Map />
      <Header />
      <Journey />
      </div>
    );
  };
}

export default App;
