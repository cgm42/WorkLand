// middleware example link: https://gist.github.com/markerikson/3df1cf5abbac57820a20059287b4be58
// import { wsEndpoint } from '../utils/constants';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import {
  SET_VIDEO_PARTICIPANTS,
  SET_SOCKETID,
  USER_DISCONNECT,
} from '../reducers/mapReducer';
export const socketRTK = () => {
  return (storeAPI) => {
    const socket = io(process.env.REACT_APP_WS_SOCKET);
    socket.on('connect', () => {
      storeAPI.dispatch(SET_SOCKETID({ id: socket.id }));
    });

    socket.on('userList', (users) => {
      storeAPI.dispatch(SET_VIDEO_PARTICIPANTS(users));
    });

    socket.on('movementMessage', (arg) => {
      storeAPI.dispatch(JSON.parse(arg)); //type:UPDATE_OTHERS
    });

    socket.on('userDisconnect', (id) => {
      storeAPI.dispatch(USER_DISCONNECT(id));
    });

    socket.on('receivedAnnouncement', (arg) => {
      storeAPI.dispatch(JSON.parse(arg));
    });

    socket.on('receiveDirect', (arg) => {
      storeAPI.dispatch(arg);
    });

    return (next) => (action) => {
      const newState = next(action);
      if (action.type === 'WALK') {
        socket.volatile.emit(
          'movementMessage',
          JSON.stringify({
            type: 'UPDATE_OTHERS',
            payload: storeAPI.getState().players[action.payload.id],
          })
        );
      }

      if (action.type === 'ANNOUNCEMENT') {
        socket.emit(
          'announcement',
          JSON.stringify({
            type: 'RECEIVED_ANNOUNCEMENT',
            payload: storeAPI.getState().outgoingGif,
          })
        );
      }

      if (action.type === 'SEND_DIRECT') {
        socket.emit('sendDirect', {
          type: 'RECEIVE_DIRECT',
          payload: storeAPI.getState().outgoingGif,
        });
      }
      return newState;
    };
  };
};
