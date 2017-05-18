import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers/index';
import Routes from './routes';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools( // enable Redux Dev Tools, comment out if in PROD
    applyMiddleware(middleware)
  )
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default App;
