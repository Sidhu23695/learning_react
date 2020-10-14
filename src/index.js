import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { InsertDetails } from './components/index';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import rootSaga from './sagas/rootSaga';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Route exact path = "/" component = {App}/>
        <Route path = "/home" component = {App} />
        <Route path = "/insert" component = {InsertDetails} />
    </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
