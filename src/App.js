import React, { Component } from 'react';
import logo from './logo.svg';
import images from './images.jpg'
import abc from './abc.jpg'
import jin from './jin.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <img src={images} className="App-images" alt="images" />



          <p className="App-intro">
<h2>

        Не злите котиков)))
</h2>
  <img src={abc} className="App-images" alt="abc" />


        </p>

    p className="App-intro">
    </div>
    );
  }
}

export default App;
