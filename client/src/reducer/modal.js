import produce from 'immer';

const initialized = {
  error: null,
};

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const INIT_ERROR_MESSAGE = 'INIT_ERROR_MESSAGE';

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ERROR_MESSAGE:
        draft.error = action.data;
        break;
      case INIT_ERROR_MESSAGE:
        draft.error = null;
        break;
      default:
        break;
    }
  });

export default reducer;
