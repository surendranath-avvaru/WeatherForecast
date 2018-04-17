import { FETCH_USERS } from '../actions/users/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_USERS:
		if (!action.payload.data) {
			return state;
		}
		// return Object.assign({}, state, action.payload.data);
		return [ action.payload.data, ...state ];
		//return { users:action.payload.data, ...state }; //Use this
	default:
		return state;
	}
}
