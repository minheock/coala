import produce from 'immer';

export const initialized = {
  userInfo: null,
  allUserInfo: [],
};

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const EDIT_USERINFO_SUCCESS = 'EDIT_USERINFO_SUCCESS';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOAD_ALL_USERINFO_SUCCESS = 'LOAD_ALL_USERINFO_SUCCESS';

const dummyUser = {
  username: '성민',
  profile: 'https://joeschmoe.io/api/v1/random',
};

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOG_IN_SUCCESS:
        if (action.data.profile === null) {
          action.data.profile = 'https://joeschmoe.io/api/v1/random';
        }
        draft.userInfo = action.data;
        break;
      case LOG_OUT_SUCCESS:
        draft.userInfo = null;
        break;
      case EDIT_USERINFO_SUCCESS:
        draft.userInfo = { ...draft.userInfo, ...action.data };
        break;
      case LOAD_ALL_USERINFO_SUCCESS:
        draft.allUserInfo = action.data;
        break;
      default:
        break;
    }
  });

export default reducer;
