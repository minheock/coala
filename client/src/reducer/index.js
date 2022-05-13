import { combineReducers } from 'redux';
import user, {
  CHECK_UNREAD_MESSAGES_DATE,
  EDIT_USERINFO_SUCCESS,
} from './user';
import content, {
  EDIT_USER_CHANGE_CONTENTS,
  GET_UNREAD_COMMENTS,
} from './content';
import modal from './modal';
import chat, { GET_UNREAD_CHAT } from './chat';

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

export const getUserUnrealData = data => dispatch => {
  dispatch({
    type: GET_UNREAD_COMMENTS,
    data: data.comment,
  });
  dispatch({
    type: GET_UNREAD_CHAT,
    data: data.chat,
  });
  dispatch({
    type: CHECK_UNREAD_MESSAGES_DATE,
    data: data.date[0],
  });
};
const rootReducer = combineReducers({
  user,
  content,
  modal,
  chat,
});

export default rootReducer;
