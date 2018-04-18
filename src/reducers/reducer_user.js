import { FETCH_USERS } from '../actions/users/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_USERS:
		if (!action.payload.data) {
			return state;
		}
		return [ action.payload.data.payload.results ];
	default:
		return state;
	}
}
