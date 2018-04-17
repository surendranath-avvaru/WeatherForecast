import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

import App from './components/weather/app';
import UserMain from './components/users/user_main';
import reducers from './reducers';
import Menu from './menu';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history = {browserHistory}>
  		<Route path="/" component = {Menu}>
  			<IndexRoute component={App} />
	  		<Route path="/weather" component = {App} />
	  		<Route path="/users" component = {UserMain} />
  		</Route>
  	</Router>
  </Provider>
  , document.querySelector('.container'));
