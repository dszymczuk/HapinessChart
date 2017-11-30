import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { install } from 'redux-loop';
import { createLogger } from 'redux-logger'

import rootReducer from './reducers';

const logger = createLogger({
  collapsed:true,
  duration:true
});


const initialState = {

};

const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(logger),
  install()
));

export default store;