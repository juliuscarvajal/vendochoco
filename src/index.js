import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import Store from './store';
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();
const StoreInstance = Store()(sagaMiddleware);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
