import _ from 'lodash';
import { FETCH_USERS, USER_DETAILS } from '../actions/users/index';

export default function(state = {}, action) {

	switch (action.type) {
	case FETCH_USERS:
		return (action.payload.data.payload);

	case USER_DETAILS:
		return { ...state, [action.payload.data.payload.id]:action.payload.data.payload }

	default:
		return state;
	}
}
