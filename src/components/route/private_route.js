import React from 'react';
import {Route, Redirect } from 'react-router-dom';

import Authentication from '../../authentication/authentication.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render = { props =>
      Authentication.isAuthenticatedUser() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to = {{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

export default PrivateRoute;