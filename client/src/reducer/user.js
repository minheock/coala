import produce from 'immer';

export const initialized = {
  githubLoading: false, // 깃허브 로그인 시도중
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그인 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  loadMyInfoLoading: false, // 유저정보 로드 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  me: null,
};

export const GITHUB_REQUEST = 'GITHUB_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOG_IN_SUCCESS:
        draft.logInLoading = true;
        break;
      default:
        break;
    }
  });

export default reducer;
