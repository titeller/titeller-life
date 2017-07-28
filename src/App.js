import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    playList: ['NK-AVgHnHPE', '69XxhLBASdY', 'BnqfXlEKw44', 'piZ4vWZ6DLo', 'G_6lJRfvNpU']
  }
  render() {
    const { playList } = this.state
    const video = playList[Math.floor(Math.random() * playList.length)]
    return (
      <div className="app">
        <div className="overlay">
          <div className="video-background">
            <div className="video-foreground">
              <iframe src={`https://www.youtube.com/embed/${video}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${video}`} frameBorder="0" allowFullScreen title="xDeep Music" />
            </div>
          </div>
          <div className="text-center">
            <div className="wrapper">
              <img src="/me.jpg" className="me-avatar" alt="me-avatar" />
              <h1>Hi, i am Ti</h1>
              <h3>What i should to do on this website?</h3>
              <span className="text-small">
                <span>Video by </span>
                <a href="https://www.youtube.com/channel/UCSSEXzYHBijpCPJdiZbS7mw/featured" target="_blank" rel="noopener noreferrer">XDeep Music</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
