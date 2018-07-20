import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import MoviesContainer from '../containers/MoviesContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/allmovies' component={ MoviesContainer }/>
  </Switch>
)




  