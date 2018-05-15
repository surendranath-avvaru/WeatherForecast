import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/users/index';


class RegisterUser extends Component {

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
		this.props.registerUser(values, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { handleSubmit } = this.props;

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
		      	<div>
		        	<Field label="Password" name="password" component={this.renderPasswordField}/>
		      	</div>
		      	<div>
		        	<Field label="Confirm Password" name="confirm_password" component={this.renderPasswordField}/>
		      	</div>

		      	<button type="submit" className="btn btn-success">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.first_name) {
		errors.firstName = "Enter first name!";
	}
	if (!values.last_name) {
		errors.lastName = "Enter last name!";
	}
	if (!values.username) {
		errors.userName = "Enter user name!";
	}
	if (!values.email) {
		errors.email = "Enter email!";
	}
	if (!values.password) {
		errors.password = "Enter password!";
	}
	if (values.password != values.confirm_password) {
		errors.confirm_password = "Passwords do not match!";
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'RegisterUserForm'
})(connect(null, { registerUser })(RegisterUser));