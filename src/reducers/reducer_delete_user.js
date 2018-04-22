import { DELETE_USER } from '../actions/users/index';

export default function(state=[], action) {
	// debugger;
	switch (action.type) {
	case DELETE_USER:
		if (!action.payload.data) {
			return state;
		}
		return state;
	default:
		return state;
	}
}