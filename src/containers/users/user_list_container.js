import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUsers } from '../../actions/users/index';
import { deleteUser } from '../../actions/users/index';
import UserDetail from '../../components/users/user_detail';


class UserList extends Component {

	constructor(props) {
		super(props);
		this.props.fetchUsers();
	}

	renderUser(userData) {
		return userData.map((user)=><UserDetail user={user} />);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{this.props.users.map(this.renderUser)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({users}) {
	return { users };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);