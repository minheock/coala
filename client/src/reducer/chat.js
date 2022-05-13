import produce from 'immer';

const initialized = {
  userUnreadChats: [],
  socket: null,
  zoomImg: null,
  zoomCode: null,
};

export const INIT_SOCKETIO = 'INIT_SOCKETIO';
export const ZOOM_CHAT_IMAGE = 'ZOOM_CHAT_IMAGE';
export const INIT_ZOOM_CHAT_IMAGE = 'INIT_ZOOM_CHAT_IMAGE';
export const ZOOM_CHAT_CODE = 'ZOOM_CHAT_CODE';
export const INIT_ZOOM_CHAT_CODE = 'INIT_ZOOM_CHAT_CODE';
export const GET_UNREAD_CHAT = 'GET_UNREAD_CHAT';
export const SET_READ_CHAT = 'SET_READ_CHAT';
export const INIT_UNREAD_CHAT = 'INIT_UNREAD_CHAT';

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
      case ZOOM_CHAT_CODE:
        draft.zoomCode = action.data;
        break;
      case INIT_ZOOM_CHAT_CODE:
        draft.zoomCode = null;
        break;
      case GET_UNREAD_CHAT:
        draft.userUnreadChats = action.data;
        break;
      case INIT_UNREAD_CHAT:
        draft.userUnreadChats = [];
        break;
      case SET_READ_CHAT:
        draft.userUnreadChats = [
          draft.userUnreadChats.filter(v => v.postId !== action.data),
        ];
        break;
      default:
        break;
    }
  });

export default reducer;
