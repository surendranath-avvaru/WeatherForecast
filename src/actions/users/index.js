import axios from 'axios';

const ROOT_URl = "http://localhost:8000/api";

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers() {
	const url = `${ROOT_URl}/user/`;
	var request = axios.get(url);/*.then((response)=>{return response});*/
	/*({
						method: 'get',
						url: url
					})*/
	return {
		type: FETCH_USERS,
		payload: request/*.then((response) => {return response})*/
		/*[
            {
                "id": 1,
                "first_name": "Product",
                "last_name": "Admin",
                "username": "admin",
                "email": "admin@aspiresys.com"
            },
            {
                "id": 8,
                "first_name": "Surendranath",
                "last_name": "Avvaru",
                "username": "surendranath.avvaru",
                "email": "surendranath.avvaru@aspiresys.com"
            },
            {
                "id": 9,
                "first_name": "Surendranath",
                "last_name": "Avvaru",
                "username": "rakesh.murali",
                "email": "rakesh.murali@aspiresys.com"
            }
        ]*/
	}

}