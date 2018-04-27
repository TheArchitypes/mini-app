import 'babel-polyfill';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import middlewareApi from './middleware/api';
import Routes from './Routes';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import './sass/index.scss';
// import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

const configureStore = preloadedState => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware, middlewareApi, routerMiddleware(history))),
    global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{Routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// registerServiceWorker();
