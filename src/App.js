import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="overlay">
          <div className="text-center">
            <div className="wrapper">
              <img src="/me.jpg" className="me-avatar" alt="me-avatar" />
              <h1>Hi, i am Ti</h1>
              <h3>What you want to know just ask me.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
