import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    playList: ['XY7YGoHi32E']
  }
  render() {
    const { playList } = this.state
    const video = playList[Math.floor(Math.random() * playList.length)]
    return (
      <div className="app">
        <div className="overlay">
          <div className="video-background">
            <div className="video-foreground">
              <iframe className="youtube-player" type="text/html" src={`https://www.youtube.com/embed/${video}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${video}`} frameBorder="0" allowFullScreen title="xDeep Music" />
            </div>
          </div>
          <div className="image-background" />
          <div className="text-center">
            <div className="wrapper">
              <img src="/me.jpg" className="me-avatar" alt="me-avatar" />
              <h1>Hi, I'm Ti</h1>
              <h3>What should i do on this website?</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
