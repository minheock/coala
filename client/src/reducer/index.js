import { combineReducers } from 'redux';
import user from './user';
import content from './content';
import modal from './modal';

const rootReducer = combineReducers({
  user,
  content,
  modal,
});

export default rootReducer;
