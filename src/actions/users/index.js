import axios from 'axios';

const ROOT_URl = "http://localhost:8000/api";

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers() {
	const url = `${ROOT_URl}/user/`;
	var request = axios.get(url);

	return {
		type: FETCH_USERS,
		payload: request
	}

}