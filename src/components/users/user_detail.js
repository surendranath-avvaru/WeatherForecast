import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { deleteUser } from '../../actions/users/index';


export default class UserDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr className="table-row">
				<td><Link to={`/user/${this.props.user.id}`}>{this.props.user.first_name}</Link></td>
				<td>{this.props.user.last_name}</td>
				<td>{this.props.user.username}</td>
				<td>{this.props.user.email}</td>
				<td><button ref='click_element' id={this.props.user.id} className='btn btn-danger' onClick= { (e) => this.onDelete(e)}>Delete</button></td>
			</tr>
			);
	}
	onDelete(e){
        let id = this.refs.click_element.id;
        this.props.deleteUser(id, () => {
			this.props.fetchUsers(this.props.page);
		}, this.props.page);
    }
}