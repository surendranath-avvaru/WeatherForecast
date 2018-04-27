import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { deleteUser } from '../../actions/users/index';


export default class UserDetail extends React.Component {
	constructor(props) {
		super(props);
		// this.delete = this.delete.bind(this);
	}

	// static contextTypes = {
	// 	router: PropTypes.object
	// };

	/*delete(){
		const user_id = this.props.user.id;
		this.props.deleteUser(user_id).then(() => {this.context.router.push('/users');});
	}*/

	render() {
		// const user_id = this.props.user.id;
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
        let id = this.refs.click_element.id
        this.props.deleteUser(id)
    }
}
/*
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deleteUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserDetail);*/