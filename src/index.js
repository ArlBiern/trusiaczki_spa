import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

import * as serviceWorker from './serviceWorker';

render (
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}></Router>
  </Provider>,
document.getElementById('root'));

//store.dispatch(getTales());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
