import React from 'react';

// import { deleteUser } from '../../actions/users/index';


const UserDetail = (props) => {
	const user_id = props.user.id;
	return (
		<tr className="table-row" key={user_id}>
			<td>{props.user.first_name}</td>
			<td>{props.user.last_name}</td>
			<td>{props.user.username}</td>
			<td>{props.user.email}</td>
			<td><button>Delete</button></td>
		</tr>
	)
};

export default UserDetail;