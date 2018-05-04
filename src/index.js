import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/weather/app';
import UserMain from './components/users/user_main';
import RegisterUser from './containers/users/user_registration';
import UserLogin from './containers/users/user_login';
import UserDetails from './containers/users/user_details';
import reducers from './reducers';
import Menu from './menu';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component = {App} />
          <Route path="/users" component = {UserMain} />
          <Route path="/user/:id" component = {UserDetails} />
        </Switch>
        <br/>
        <Switch>
          <Route path="/login" component = {UserLogin} />
          <Route path="/register" component = {RegisterUser} />
        </Switch>
      </div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));