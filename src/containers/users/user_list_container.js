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
		// this.props.fetchUsers();
	}

	componentDidMount() {
		this.props.fetchUsers();
	}
	
	/*renderUser(userData) {
		return userData.map((user)=><UserDetail user={user} />);
	}*/

	render() {
	    const per_page = 10;
	    const pages = Math.ceil(this.props.users_count / per_page);
	    const current_page = this.props.start_page;
	    const start_offset = (current_page - 1) * per_page;

	    let start_count = 0;
	    let items = [];
	    for (let number = 1; number <= pages; number++) {
		  items.push(
		    <li>{number}</li>
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
						{ _.map(this.props.users, user => <UserDetail user={user} deleteUser={this.props.deleteUser} key={user.id}/>)}
						{/*this.props.users.map(this.renderUser)*/}
					</tbody>
				</table>
				<ul className="pagination">
					<li>&larr;</li>
					{items}
					<li>&rarr;</li>
				</ul>

				{/*<Pagination bsSize="large">{items}</Pagination>
				<Pagination>
				  <Pagination.Prev />
				  <Pagination.Item>{1}</Pagination.Item>

				  <Pagination.Item>{10}</Pagination.Item>
				  <Pagination.Item>{11}</Pagination.Item>
				  <Pagination.Item active>{12}</Pagination.Item>
				  <Pagination.Item>{13}</Pagination.Item>

				  <Pagination.Item>{20}</Pagination.Item>
				  <Pagination.Next />
				</Pagination>
				<Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} 
				first last next
          prev boundaryLinks items={pages} activePage={current_page}/>*/}
				{/*
				<Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} 
				first last next prev boundaryLinks items={pages} activePage={current_page} />*/}
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
			start_page: state.users.next ? Number(state.users.next.split("?")[1].match(/\d+/g)[0])-1 : (state.users.previous ? Number(state.users.previous.split("?")[1].match(/\d+/g)[0])+1 : 1)
		}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUsers, deleteUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);