import _ from 'lodash';
import { FETCH_USERS, USER_DETAILS } from '../actions/users/index';

export default function(state = {}, action) {
	// debugger;
	switch (action.type) {
	case FETCH_USERS:
		// if (!action.payload.data) {
		// 	return state;
		// }
		// return [ action.payload.data.payload.results ];
		return (action.payload.data.payload);
		//_.mapKeys(action.payload.data.payload.results, 'id');

	case USER_DETAILS:
		return { ...state, [action.payload.data.payload.id]:action.payload.data.payload }

	case 'DELETE_USER':
		let new_state = Object.assign({}, state);
		// delete new_state.results[action.payload];
		new_state.count--;
		new_state.results = new_state.results.filter(user => user.id != Number(action.payload))
		return new_state
		//{ ...new_state.results, ...new_state.results.filter(user => user.id != Number(action.payload))}

	default:
		return state;
	}
}
