import { FETCH_USERS } from '../actions/users/index';

const INITIAL_STATE = { users: [] };

export default function(state = [], action) {
	
	switch (action.type) {
	case FETCH_USERS:
		return [ ...action.payload.data.payload.results,  ...state ];
	default:
		return INITIAL_STATE;
	}
}
