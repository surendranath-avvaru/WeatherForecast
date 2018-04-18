import React, { Component } from 'react'
import { Link } from 'react-router';
import axios from 'axios';


export default class Menu extends React.Component {
   constructor(props){
      super(props);
   }

   render() {
      const role = "Admin"
      const users = role == "Admin" ? (<li><Link to="/users">Users</Link></li>) : (<br/>);

      return (
         <div>
         <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
               <li><Link to="/my-profile">My Profile</Link></li>
               <li><Link to="/weather">Weather Info</Link></li>
            {/* If condition for super user here! */}
               { users }
            </ul>
         </nav>
            {this.props.children}
         </div>
      )
   }
}