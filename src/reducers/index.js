import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import WeatherReducer from './reducer_weather';
import UserReducer from './reducer_user';
import DeleteUserReducer from './reducer_delete_user';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  users: UserReducer,
  form: formReducer,
  delete_user: DeleteUserReducer
});

export default rootReducer;