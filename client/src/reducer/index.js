import { combineReducers } from 'redux';
import user from './user';
import content from './content';
import modal from './modal';
import chat from './chat';

const rootReducer = combineReducers({
  user,
  content,
  modal,
  chat,
});

export default rootReducer;
