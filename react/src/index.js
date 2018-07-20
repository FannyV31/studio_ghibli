import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Route, Switch} from 'react-router'

ReactDOM.render((
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/login/" component={Login} />
      <PrivateRoute path="/" component={App}/>
    </Switch>
  </ConnectedRouter>
  </Provider>
    
  ), document.getElementById('root'))
