import React, { Component } from 'react';
import Navbars from './components/Navbars';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="APP" className="App">
        <header>
          <Navbars />
        </header>
        <div className="App-intro">
        <h1 className="title2"><p>Print, TEST TEST TEST</p></h1>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
