import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URl = "http://localhost:8000/api";

export const FETCH_USERS = 'FETCH_USERS';
export const REGISTER_USER = 'REGISTER_USER';
export const USER_DETAILS = 'USER_DETAILS';
export const DELETE_USER = 'DELETE_USER';

export function fetchUsers() {
	const url = `${ROOT_URl}/user/`;
	const request = axios.get(url);

	return {
		type: FETCH_USERS,
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

export function detailUser(id) {
	const url = `${ROOT_URl}/user/${id}/`;
	const request = axios.get(url);

	return {
		type: USER_DETAILS,
		payload: request
	};
}

export function deleteUser(id, callback) {
	const url = `${ROOT_URl}/user/${id}/`;
	const request = axios.delete(url);/*.then(() => callback());*/

	return {
		type: DELETE_USER,
		payload: id
	};
}