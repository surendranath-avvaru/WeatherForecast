import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pagination } from 'react-bootstrap';

import { fetchUsers } from '../../actions/users/index';
import UserDetail from '../../components/users/user_detail';

import { deleteUser } from '../../actions/users/index';


class UserList extends Component {

	constructor(props) {
		super(props);
		this.getSelectedPageUsers = this.getSelectedPageUsers.bind(this);
		this.getPreviousPageUsers = this.getPreviousPageUsers.bind(this);
		this.getNextPageUsers = this.getNextPageUsers.bind(this);
	}

	componentDidMount() {
		this.props.fetchUsers(this.props.start_page);
	}
	
	getSelectedPageUsers(e) {
		this.props.fetchUsers(Number(e.target.innerText));
	}

	getPreviousPageUsers(e, value) {
		if(value != null) {
			this.props.fetchUsers(value);
		}
	}

	getNextPageUsers(e, value) {
		if(value != null) {
			this.props.fetchUsers(value);
		}
	}

	render() {
	    const per_page = 10;
	    const pages = Math.ceil(this.props.users_count / per_page);
	    const current_page = this.props.start_page;
	    const previous_page = this.props.previous_page;
	    const next_page = this.props.next_page;

	    let start_count = 0;
	    let items = [];
	    for (let number = 1; number <= pages; number++) {
		  items.push(
		    <Pagination.Item onClick={(e)=>this.getSelectedPageUsers(e)} key={number} active={number === current_page}>{number}</Pagination.Item>
		  );
		}

		return (
			<div>
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
						{ _.map(this.props.users, user => <UserDetail user={user} deleteUser={this.props.deleteUser} fetchUsers={this.props.fetchUsers} page={current_page} key={user.id}/>)}
					</tbody>
				</table>

				<Pagination>
				  <Pagination.Prev onClick={(e)=>this.getPreviousPageUsers(e, this.props.previous_page)}/>
				  {items}
				  <Pagination.Next onClick={(e)=>this.getNextPageUsers(e, this.props.next_page)}/>
				</Pagination>

			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
			users: _.mapKeys(state.users.results, 'id'),
			next_page: state.users.next != null ? Number(state.users.next.split("?")[1].match(/\d+/g)[0]) : null,
			previous_page: state.users.previous != null ? (state.users.previous.split("?")[1] ? Number(state.users.previous.split("?")[1].match(/\d+/g)[0]) : 1) : null,
			users_count: state.users.count,
			start_page: state.users.next != null ? Number(state.users.next.split("?")[1].match(/\d+/g)[0])-1 : (state.users.previous != null ? (state.users.previous.split("?")[1] ? Number(state.users.previous.split("?")[1].match(/\d+/g)[0])+1 : 2):1)
		}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUsers, deleteUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);