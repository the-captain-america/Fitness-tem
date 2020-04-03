import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as selectors from '../selectors';
import * as actions from '../actions';
import { useSelector } from '../customHooks';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as reducers from '../reducers';
import logger from '../logger';

let REACT_APP_REDUX_LOGGER, NODE_ENV;
const history = createBrowserHistory();
if (process) {
	REACT_APP_REDUX_LOGGER = process.env.REACT_APP_REDUX_LOGGER;
	NODE_ENV = process.env.NODE_ENV;
}
const isDevelopment = NODE_ENV === 'development';
const slices = combineReducers({
	appState: combineReducers({ ...reducers }),
	router: connectRouter(history)
});
const composeEnhancers =
	isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				trace: true,
				traceLimit: 25
		  })
		: compose;
const middlewares = [applyMiddleware(thunk, routerMiddleware(history))];
if (isDevelopment && REACT_APP_REDUX_LOGGER) {
	middlewares.push(applyMiddleware(logger));
}
const store = createStore(slices, composeEnhancers(...middlewares));

export default store;

export { useSelector, selectors, actions, history };
