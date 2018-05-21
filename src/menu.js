import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserProfile } from './actions/users/index';
import Authentication from './authentication/authentication';

class Menu extends React.Component {
   constructor(props){
      super(props);
      this.state = {is_admin: ''}
   }

   logoutUser() {
      Authentication.deauthenticateUser();
   }

   componentDidMount() {
      this.props.getUserProfile(Authentication.getAuthenticatedToken(), (res)=>{
                     if (res.status == 200) {
                        Authentication.setSuperUserRole(res.data.payload.is_superuser);
                        this.setState({is_admin: Authentication.isSuperUserRole()});
                     }
                     else {
                        alert("Error!");
                     }
                  });
   }

   render() {
      const users = this.state.is_admin == 'true' ? (<li><Link to="/users">Users</Link></li>) : null;

      return (
         <div>
            <nav className="navbar navbar-default">
               <ul className="nav navbar-nav">
                  <li><Link to="/weather-info">Weather Info</Link></li>
                  { users }
                  <li><Link to="/" onClick={()=> this.logoutUser()}>Logout</Link></li>
               </ul>
            </nav>
         </div>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ getUserProfile }, dispatch);
}

export default connect(null, mapDispatchToProps)(Menu);