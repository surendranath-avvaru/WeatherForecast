import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUsers } from '../../actions/users/index';

class UserList extends Component {

	constructor(props) {
		super(props);
		this.props.fetchUsers();
	}

	renderUser(userData) {
		return userData.map((user)=>{ return (
			<tr className="table-row" key={user.id}>
				<td>{user.first_name}</td>
				<td>{user.last_name}</td>
				<td>{user.username}</td>
				<td>{user.email}</td>
			</tr>
			);
		})
		/*const user_id = userData.id
		const first_name = userData.first_name
		const last_name = userData.last_name;
		const username = userData.username;
		const email = userData.email;

		return (
			<tr key={user_id}>
				<td>{first_name}</td>
				<td>{last_name}</td>
				<td>{username}</td>
				<td>{email}</td>
			</tr>
		);*/
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

// export default connect(mapStateToProps)(UserList);