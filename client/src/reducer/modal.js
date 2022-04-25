import produce from 'immer';

const initialized = {
  error: null,
};

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ERROR_MESSAGE:
        draft.error = action.data;
        break;
      default:
        break;
    }
  });

export default reducer;
