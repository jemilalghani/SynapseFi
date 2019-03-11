import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Dashboard />
      </div>
    );
  }
}

export default App;
