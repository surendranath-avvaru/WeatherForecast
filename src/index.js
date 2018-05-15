import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Menu from './menu';
import store from './redux_store/store';
import App from './components/weather/app';
import UserMain from './components/users/user_main';
import Logout from './components/users/user_logout';
import UserLogin from './containers/users/user_login';
import UserDetails from './containers/users/user_details';
import Authentication from './authentication/authentication.js';
import RegisterUser from './containers/users/user_registration';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render = { props =>
      Authentication.isAuthenticatedUser() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to = {{
            pathname: "/"
          }}
        />
      )
    }
  />
);

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component = {UserLogin} />
          <Route path="/register" component = {RegisterUser} />
          <PrivateRoute path="/weather-info" component = {App} />
          <PrivateRoute path="/users" component = {UserMain} />
          <PrivateRoute path="/user/:id" component = {UserDetails} />
          <PrivateRoute path="/logout" component = {Logout} />
        </Switch>
      </div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));