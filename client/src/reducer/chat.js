import produce from 'immer';

const initialized = {
  socket: null,
};

export const INIT_SOCKETIO = 'INIT_SOCKETIO';

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INIT_SOCKETIO:
        draft.socket = action.data;
        break;
      default:
        break;
    }
  });

export default reducer;
