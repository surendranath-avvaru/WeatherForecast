import React, { Component } from 'react';

import Authentication from '../../authentication/authentication.js';


export default class Logout extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		Authentication.deauthenticateUser();
		this.props.history.push('/');
	}

	render() {
		return (
			<div>You have been successfully logged out</div>
		);
	}
}