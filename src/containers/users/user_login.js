import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { loginUser } from '../../actions/users/index';

class UserLogin extends Component {

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
	renderPasswordField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="password"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		console.log(values);
		debugger;
		this.props.loginUser(values, (response) => {
			response.json().then((data) => { Authentication.authenticateUser(data.access_token) });
			this.props.history.push('/users');
		});

	}

	render() {
		const { handleSubmit } = this.props;
		
		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			      	<div>
			        	<Field label="UserName" name="username" component={this.renderField}/>
			      	</div>
			      	<div>
			        	<Field label="Password" name="password" component={this.renderPasswordField}/>
			      	</div>

			      	<button type="submit" className="btn btn-success">Login</button>
				</form>
				<hr/>
				<div>
					Not a user? <Link to="/register" className="btn btn-primary">Register</Link>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.username) {
		errors.userName = "Enter user name!";
	}

	if (!values.password) {
		errors.password = "Enter password!";
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'UserLoginForm'
})(connect(null, { loginUser })(UserLogin));