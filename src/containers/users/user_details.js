import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { detailUser, deleteUser } from '../../actions/users/index';

class UserDetails extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.detailUser(id);
	}

	render() {
		const { user } = this.props;

		if (!user) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<div>
					<Link to="/users">Back</Link>
					<h3>Name</h3>
					<p>{ user.first_name + " " + user.last_name }</p>
					<h3>Username</h3>
					<p>{ user.username }</p>
					<h3>Email</h3>
					<p>{ user.email }</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ users }, ownProps) {
	return { user: users[ownProps.match.params.id] };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ detailUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);