import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './weather/app';
import Menu from '../containers/menu';
import store from '../redux_store/store';
import UserMain from './users/user_main';
import PrivateRoute from './route/private_route';
import PageNotFound from './error/page_not_found';
import UserLogin from '../containers/users/user_login';
import UserDetails from '../containers/users/user_details';
import RegisterUser from '../containers/users/user_registration';

const DefaultContainer = () => (
  	<div>
      <Menu />
      <PrivateRoute path="/weather-info" component = {App} />
      <PrivateRoute path="/users" component = {UserMain} />
      <PrivateRoute path="/user/:id" component = {UserDetails} />
  	</div>
)

export default class Main extends React.Component {

   render() {
   		return (
		      <Provider store={store}>
			  	<BrowserRouter>
			        <Switch>
			            <Route exact path="/" render = {() => <Redirect to="/login" />} />
			            <Route path="/login" component = {UserLogin} />
			            <Route path="/register" component = {RegisterUser} />
			            <Route component = {DefaultContainer} />
			        </Switch>
			        {/*<Switch><PrivateRoute component = {PageNotFound} /></Switch>*/}
			  	</BrowserRouter>
			  </Provider>
		    );
   }
}