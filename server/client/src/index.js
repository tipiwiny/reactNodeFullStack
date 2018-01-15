import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));

console.log(process.env.REACT_APP_STRIPE_KEY)
