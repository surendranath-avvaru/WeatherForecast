import React from 'react';

import { deleteUser } from '../../actions/users/index';


class UserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete(){
		const user_id = this.props.user.id;
		this.props.deletePost(user_id);
	}

	render() {
		const user_id = this.props.user.id;
		return (
			<tr className="table-row" key={user_id}>
				<td>{this.props.user.first_name}</td>
				<td>{this.props.user.last_name}</td>
				<td>{this.props.user.username}</td>
				<td>{this.props.user.email}</td>
				<td><button onClick={this.delete}>Delete</button></td>
			</tr>
			);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUsers }, dispatch);
}

export default UserDetail;