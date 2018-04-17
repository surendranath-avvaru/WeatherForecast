import { FETCH_WEATHER } from '../actions/weather/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		if (!action.payload.data) {
			alert("City not found!");
			return state;
		}
		/*return state.concat([action.payload.data]);*/
		return [ ...state, action.payload.data ];
	}
	return state;
}