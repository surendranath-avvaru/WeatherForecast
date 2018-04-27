import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


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
	}

	render() {
		const { handleLogin } = this.props;
		
		return (
			<div>
				<form>
			      	<div>
			        	<Field label="UserName" name="userName" component={this.renderField}/>
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

	if (!values.userName) {
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
})(UserLogin);