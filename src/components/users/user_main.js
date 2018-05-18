import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserList from '../../containers/users/user_list_container';
import { fetchUsers } from '../../actions/users/index';

export default class UserMain extends Component {

	constructor(props) {
		super(props);
	}

	render() {
	    return (
	        <div>
	      		<UserList />
	        </div>
	    );
	}
}
