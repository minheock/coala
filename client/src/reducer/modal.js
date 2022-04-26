import produce from 'immer';

const initialized = {
  error: null,
  success: null,
};

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE';

export const INIT_MESSAGE = 'INIT_MESSAGE';

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ERROR_MESSAGE:
        draft.error = action.data;
        break;
      case SET_SUCCESS_MESSAGE:
        draft.success = action.data;
        break;
      case INIT_MESSAGE:
        draft.success = null;
        draft.error = null;
        break;
      default:
        break;
    }
  });

export default reducer;
