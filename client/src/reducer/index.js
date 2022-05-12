import { combineReducers } from 'redux';
import user, { EDIT_USERINFO_SUCCESS } from './user';
import content, { EDIT_USER_CHANGE_CONTENTS } from './content';
import modal from './modal';
import chat from './chat';

export const editUserThunk = editData => dispatch => {
  dispatch({
    type: EDIT_USERINFO_SUCCESS,
    data: editData,
  });
  dispatch({
    type: EDIT_USER_CHANGE_CONTENTS,
    data: editData,
  });
};

const rootReducer = combineReducers({
  user,
  content,
  modal,
  chat,
});

export default rootReducer;
