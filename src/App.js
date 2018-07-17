import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';
import Studio from '../src/logo/studioghibli.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        { MyRoutes }
      <h1 className="App-title">Welcome Studio Ghibli fans and fanatics!</h1>
      <header className="App-header">
        <img src={Studio} className="App-logo" alt="Studio Ghibli logo" />
       
      </header>
      
      </div>
    );
  }
}

export default App;
