import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import AnimatedRoutes from "./components/routees/AnimatedRoutes";

export default class App extends Component {
  render() {
    return (
      <div className="App flex">
        <Router>
          <Navbar></Navbar>
          <AnimatedRoutes></AnimatedRoutes>
        </Router>
      </div>
    );
  }
}
