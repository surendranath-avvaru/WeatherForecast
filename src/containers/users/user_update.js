import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import { initialize } from 'redux-form';

import { detailUser, updateUser } from '../../actions/users/index';


class UpdateUser extends Component {

	constructor(props) {
		super(props);
		this.initializeForm = this.initializeForm.bind(this);
		this.state = {error: "Error"}
	}

	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}
	renderEmailField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="email"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.updateUser(this.props.id, values,
			(response) => {
				if (response.status == 200) {
						this.props.history.push('/users');
					}
				else {
					let error_keys = Object.keys(response.data.message.errors);
					alert(`Oops! You have errors in fields: ${error_keys.toString()}`)
					}
		});
	}

	componentDidMount() {
		this.props.detailUser(this.props.id).then((res)=>{
			this.initializeForm(res.payload.data.payload);
		});
	}

	initializeForm(data) {
		this.props.initialize('RegisterUserForm', data);
	}

	render() {
		const { handleSubmit } = this.props;
		if (!this.props.user) {
			return <div>Loading...</div>;
		}

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<div>
		        	<Field label="FirstName" name="first_name" component={this.renderField}/>
		      	</div>
		      	<div>
		        	<Field label="LastName" name="last_name" component={this.renderField}/>
		      	</div>
		      	<div>
		        	<Field label="UserName" name="username" component={this.renderField}/>
		      	</div>
		      	<div>
		        	<Field label="Email" name="email" component={this.renderEmailField}/>
		      	</div>

		      	<button type="submit" className="btn btn-success">Submit</button>
				<Link to="/users" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.first_name) {
		errors.first_name = "Enter first name!";
	}
	if (!values.last_name) {
		errors.last_name = "Enter last name!";
	}
	if (!values.username) {
		errors.username = "Enter user name!";
	}
	if (!values.email) {
		errors.email = "Enter email!";
	}

	return errors;
}

function mapStateToProps({users}, ownProps) {
	return { 
		id: ownProps.match.params.id,
		user: users[ownProps.match.params.id]
	};
}

export default reduxForm({
	validate,
	form: 'RegisterUserForm'
})(connect(mapStateToProps, { detailUser, updateUser, initialize })(UpdateUser));