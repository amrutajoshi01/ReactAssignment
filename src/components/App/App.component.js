import React, { Component } from "react";
import './App.css';
import { withRouter } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Home</h1>
      </div>
    );
  }
}

export default withRouter(App);