import _ from 'lodash';
import { FETCH_USERS, USER_DETAILS } from '../actions/users/index';

export default function(state = {}, action) {
	switch (action.type) {
	case FETCH_USERS:
		// if (!action.payload.data) {
		// 	return state;
		// }
		// return [ action.payload.data.payload.results ];
		return _.mapKeys(action.payload.data.payload.results, 'id');

	case USER_DETAILS:
		return { ...state, [action.payload.data.payload.id]:action.payload.data.payload }
	default:
		return state;
	}
}
