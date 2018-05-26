import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import AppRoute from './AppRoute';
import store from './store';
import './App.scss';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: '/' });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppRoute />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
