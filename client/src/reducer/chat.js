import produce from 'immer';

const initialized = {
  socket: null,
  zoomImg: null,
};

export const INIT_SOCKETIO = 'INIT_SOCKETIO';
export const ZOOM_CHAT_IMAGE = 'ZOOM_CHAT_IMAGE';
export const INIT_ZOOM_CHAT_IMAGE = 'INIT_ZOOM_CHAT_IMAGE';

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INIT_SOCKETIO:
        draft.socket = action.data;
        break;
      case ZOOM_CHAT_IMAGE:
        draft.zoomImg = action.data;
        break;
      case INIT_ZOOM_CHAT_IMAGE:
        draft.zoomImg = null;
        break;
      default:
        break;
    }
  });

export default reducer;
