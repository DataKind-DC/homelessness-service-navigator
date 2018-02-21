import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Journey } from "./Journey";
import { ExampleFetch } from "./services/components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Journey />
        <ExampleFetch />
      </div>
    );
  }
}

export default App;
