import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer';

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);

export default store;
