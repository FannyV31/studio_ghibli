import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/allmovies'}>Movies</Link>
        <form>
        <input 
          type="text"
          onChange={this.props.searchHandler}
          value={this.props.term}
          placeholder={'Search Title'}
        />
      </form>
      </header>
    )
  }
}

export default Header

