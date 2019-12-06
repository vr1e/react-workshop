import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import prognozaReducer from './reducers/prognozaReducer';
import layoutReducer from './reducers/layoutReducer';

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
	prognozaReducer: prognozaReducer,
	layoutReducer: layoutReducer
});

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__
			? window.__REDUX_DEVTOOLS_EXTENSION__ &&
					window.__REDUX_DEVTOOLS_EXTENSION__()
			: f => f
	)
);

export default store;
