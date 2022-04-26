import produce from 'immer';

export const initialized = {
  userInfo: null,
};

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

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
      default:
        break;
    }
  });

export default reducer;
