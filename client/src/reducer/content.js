import produce from 'immer';

const initialized = {
  or: false,
};

export const CONTENT_LIKE_REQUEST = 'CONTENT_LIKE_REQUEST';
export const CONTENT_LIKE_REQUES = 'CONTENT_LIKE_REQUES';

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONTENT_LIKE_REQUEST:
        draft.or = true;
        break;
      default:
        break;
    }
  });

export default reducer;
