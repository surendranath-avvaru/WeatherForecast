import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserList from '../../containers/users/user_list_container';
import { fetchUsers } from '../../actions/users/index';


class UserMain extends Component {

	constructor(props) {
		super(props);
		this.props.fetchUsers();
	}

	render() {
	    return (
	        <div>
	      		<UserList />
	        </div>
	    );
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserMain);