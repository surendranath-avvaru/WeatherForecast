import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserProfile } from './actions/users/index';
import Authentication from './authentication/authentication.js';

export default class Menu extends React.Component {
   constructor(props){
      super(props);
      this.state = {is_admin: true}
      //Authentication.isSuperUserRole()
   }

   render() {
      const users = <li><Link to="/users">Users</Link></li>
      /*const users = this.state.is_admin == 'true' ? (<li><Link to="/users">Users</Link></li>) : (<br/>);*/

      return (
         <div>
            <nav className="navbar navbar-default">
               <ul className="nav navbar-nav">
                  <li><Link to="/weather-info">Weather Info</Link></li>
               {/* If condition for super user here! */}
                  { users }
                  <li><Link to="/logout">Logout</Link></li>
               </ul>
            </nav>
         </div>
      )
   }
}