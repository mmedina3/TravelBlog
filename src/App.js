import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbars from './Components/Navbars';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <Navbars />
        </header>
      </div>
    );
  }
}
        
export default App;
