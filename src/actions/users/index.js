import axios from 'axios';
import { browserHistory } from 'react-router';
import { service_config } from '../../config.js';

const ROOT_URl = "http://localhost:8000/api";

export const FETCH_USERS = 'FETCH_USERS';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const USER_DETAILS = 'USER_DETAILS';
export const DELETE_USER = 'DELETE_USER';
export const GET_USER_PROFILE = 'GET_USER_PROFILE';

export function fetchUsers(page) {
	const url = `${ROOT_URl}/user/?page=${page}`;
	const request = axios.get(url);

	return {
		type: FETCH_USERS,
		payload: request
	};
}

export function getUserProfile(token, callback) {
	const url = `${ROOT_URl}/my-profile/`;
	const request = axios({
					    method: 'get',
					    url: url,
					    headers: {
					      'Authorization': `Bearer ${token}`
					    }
					  }).then((res) => callback(res));

	return {
		type: GET_USER_PROFILE,
		payload: request
	};
}

export function registerUser(values, callback) {
	const url = `${ROOT_URl}/user/sign-up/`;
	const request = axios.post(url, values).then(() => callback());

	return {
		type: REGISTER_USER,
		payload: request
	};
}

export function loginUser(values, callback) {
	let post_data = Object.assign(values, service_config.client_details);
	let auth_data = new FormData();
	for (var key in post_data) {
            auth_data.append(key,post_data[key])
        }
	const url = `${ROOT_URl}/login/`;
	const request = axios.post(url, auth_data).then((res) => callback(res)).catch((error)=> {callback(error.response);});

	return {
		type: LOGIN_USER,
		payload: request
	};
}

export function detailUser(id) {
	const url = `${ROOT_URl}/user/${id}/`;
	const request = axios.get(url);

	return {
		type: USER_DETAILS,
		payload: request
	};
}

export function deleteUser(id, callback, page) {
	const url = `${ROOT_URl}/user/${id}/`;
	const request = axios.delete(url).then((page) => callback(page));

	return {
		type: DELETE_USER,
		payload: request
	};
}