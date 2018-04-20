import axios from 'axios';

const ROOT_URl = "http://localhost:8000/api";

export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USER = 'DELETE_USERS';

export function fetchUsers() {
	const url = `${ROOT_URl}/user/`;
	var request = axios.get(url);

	return {
		type: FETCH_USERS,
		payload: request
	};

}

export function deleteUser(id) {
	const url = `${ROOT_URl}/user/${id}/`;
	var request = axios.delete(url);

	return {
		type: DELETE_USER,
		payload: request
	};
}