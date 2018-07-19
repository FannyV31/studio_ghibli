import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';
import Studio from '../src/logo/studioghibli.jpg';
import MoviesContainer from './containers/MoviesContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',  
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({ term:event.target.value})
  }

  render() {
    const {term, movies} = this.state;
    return (
      <div className="App">
      
        <Header term={this.state.term} searchHandler={this.searchHandler}/>
        <h1 className="App-title">Welcome Studio Ghibli fans and fanatics!</h1>
          <header className="App-header">
        <img src={Studio} className="App-logo" alt="Studio Ghibli logo" />
          <MoviesContainer term={this.state.term}/>
    
        
      </header>
      </div>
    )
  }
}

export default App
