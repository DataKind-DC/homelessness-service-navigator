import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Journey } from "./Journey";
import { ExampleFetch } from "./services/components";
import { Map } from "./Map";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
        <Journey />
        <ExampleFetch />
      </div>
    );
  }
}

export default App;
