import React from 'react';

const UserDetail = (props) => {
	return (
		<tr className="table-row" key={props.user.id}>
			<td>{props.user.first_name}</td>
			<td>{props.user.last_name}</td>
			<td>{props.user.username}</td>
			<td>{props.user.email}</td>
		</tr>
	)
}