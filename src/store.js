import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

export default initialState => (...middlewares) => createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
