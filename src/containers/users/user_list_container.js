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
	}

	componentDidMount() {
		this.props.fetchUsers(this.props.start_page);
	}
	
	getSelectedPageUsers(page) {
		this.props.fetchUsers(Number(page.target.innerText));
	}

	render() {
	    const per_page = 10;
	    const pages = Math.ceil(this.props.users_count / per_page);
	    const current_page = this.props.start_page;

	    let start_count = 0;
	    let items = [];
	    for (let number = 1; number <= pages; number++) {
		  items.push(
		    <Pagination.Item onClick={(number)=>this.getSelectedPageUsers(number)} key={number} active={number === current_page}>{number}</Pagination.Item>
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
				  <Pagination.Prev />
				  {items}
				  <Pagination.Next />
				</Pagination>

			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
			users: _.mapKeys(state.users.results, 'id'),
			next_page: state.users.next,
			previous_page: state.users.previous,
			users_count: state.users.count,
			start_page: state.users.next != null ? Number(state.users.next.split("?")[1].match(/\d+/g)[0])-1 : (state.users.previous != null ? (state.users.previous.split("?")[1] ? Number(state.users.previous.split("?")[1].match(/\d+/g)[0])+1 : 2):1)
		}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUsers, deleteUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);