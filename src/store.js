import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default initialState => (...middlewares) => createStore(
  reducers, /* preloadedState, */
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  ),
);
