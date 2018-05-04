import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { loginUser, getUserProfile } from '../../actions/users/index';
import Authentication from '../../authentication/authentication.js';

class UserLogin extends Component {

	constructor(props) {
        super(props);
        this.state = { auth_details: { is_authenticated: false,  error_message: ''}};
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
		this.props.loginUser(values,
				(response) => {
					if (response.status == 200) {
						this.setState( {auth_details: { is_authenticated: true}})
						Authentication.authenticateUser(response.data.access_token);

						this.props.getUserProfile(response.data.access_token, (res)=>{
							if (res.status == 200) {
								Authentication.setSuperUserRole(res.data.payload.is_superuser);
							}
							else {
								alert("Error!");
							}
						});
						this.props.history.push('/');

						/*is_superuser = Authentication.isSuperUserRole();
						alert(is_superuser);

						if (!is_superuser) {
							console.log("Inside if");
							console.log(this.props.profile.is_superuser);
							Authentication.setSuperUserRole(this.props.profile.is_superuser);
						}*/
					}
					else {
						this.setState( {auth_details: { is_authenticated: false, error_message: response.data.error_description}})
					}
				}
			);

	}

	render() {
		const { handleSubmit } = this.props;
		
		return (
			<div>
				<p className="error">{this.state.auth_details.error_message}</p>
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ loginUser, getUserProfile }, dispatch);
}

export default reduxForm({
	validate,
	form: 'UserLoginForm'
})(connect(null, mapDispatchToProps)(UserLogin));