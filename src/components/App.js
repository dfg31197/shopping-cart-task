import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../App.css';

class App extends Component {
  state = {
    items:[],
    total: 0
  }
  
  render() {
    return (
      <div className="container">
      <Header />
      <Main />
      <Footer />
      </div>
    );
  }
}

export default App;
