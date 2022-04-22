import { combineReducers } from 'redux';
import user from './user';
import contents from './content';

const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combineReducer = combineReducers({
        user,
        contents,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
