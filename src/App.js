import React, { Component } from 'react';
import './App.css';
import Sider from './components/Sider'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section style={{display:"flex"}}>
          <Sider />
          <MainContent />
        </section>
       <Footer />
      </div>
    );
  }
}

export default App;
