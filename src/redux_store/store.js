import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

let store = createStoreWithMiddleware(reducers);

export default store;