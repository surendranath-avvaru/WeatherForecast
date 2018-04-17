import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  users: UserReducer
});

export default rootReducer;