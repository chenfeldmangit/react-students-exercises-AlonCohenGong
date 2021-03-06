import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore , combineReducers , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import rootReducer from './reducers/appReducer';
import appReducer from './reducers/appReducer';
import tweetsReducer from './reducers/tweetsReducer'
import rootSaga from './sagas/tweetSaga'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
//const store = createStore(appReducer);
const rootReducer = combineReducers({
    appLogin: appReducer,
    tweets: tweetsReducer,
});

//const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
