import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbars from './Components/Navbars';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <Navbars />
        </header>
        <body>
          <p>Print, TEST TEST TEST</p>
        </body>
        <Footer />
      </div>
    );
  }
}
        
export default App;
