import { createReducer, createAction } from '@reduxjs/toolkit';
import {
  directions,
  modifier,
  maxSteps,
  playerTemplate,
} from '../utils/constants';
import { initX, initY } from '../utils/constants';

const initialState = {
  localID: 'local',
  localSocketId: null,
  user: {
    id: '', //id_from_db
    name: '',
    avatar: '',
  },
  players: {
    // [id_from_db]: {
    //   id: 1,
    //   isJoined: true,
    //   x: initX * 32,
    //   y: initY * 32,
    //   dir: "ArrowDown",
    //   step: 0,
    //   name: "local user",
    //   skin: "f1",
    //   socketId: "20digitsofnonesense"
    // },
  },
  mapGuide: {
    userDashboard: false,
    projectDashboard: false,
    kanban: false,
    ganttChart: false,
    taskList: false,
    piano: false,
    guitar: false,
    arcade: false,
    typeWritter: false,
  },
  mapRoute: {
    modalCanOpen: false,
    routeName: null,
  },
  video: {
    localSocketId: '',
    peers: [], //[{peerId: peerObj}]
    socketArr: [], //for rendering
  },
  outgoingGif: {
    senderName: '',
    senderAvatar: '',
    gifObj: null,
  },
  incomingGif: {
    senderName: '',
    senderAvatar: '',
    gifObj: null,
  },
};
export const SET_USER = createAction('SET_USER');
export const WALK = createAction('WALK');
export const UPDATE_OTHERS = createAction('UPDATE_OTHERS');
export const SELECT_AVATAR = createAction('SELECT_AVATAR');
export const WALK_IN_PLACE = createAction('WALK_IN_PLACE');
export const SET_MAP_GUIDE = createAction('SET_MAP_GUIDE');
export const HIDE_MAP_GUIDE = createAction('HIDE_MAP_GUIDE');
export const TOGGLE_MODAL_CAN_OPEN = createAction('TOGGLE_MODAL_CAN_OPEN');
export const JOIN_VIDEO = createAction('JOIN_VIDEO');
export const SET_VIDEO_PARTICIPANTS = createAction('SET_VIDEO_PARTICIPANTS');
export const SET_SOCKETID = createAction('SET_SOCKETID');
export const USER_DISCONNECT = createAction('USER_DISCONNECT');
export const ANNOUNCEMENT = createAction('ANNOUNCEMENT');
export const RECEIVED_ANNOUNCEMENT = createAction('RECEIVED_ANNOUNCEMENT');

export const mapReducer = createReducer(initialState, (builder) => {
  //SET_USER: save user in global state and init meeting room rendering params
  builder.addCase(SET_USER, (state, action) => {
    state.user.name = action.payload.name;
    state.user.avatar = action.payload.avatar;
    const id = action.payload.id;
    state.localID = id;
    state.user.id = id;
    state.players[id] = { ...playerTemplate };
    state.players[id]['id'] = id;
    state.players[id]['name'] = action.payload.name;
    if (!state.localSocketId) {
      state.players[id]['socketId'] = state.localSocketId;
    }
  });

  //WALK: handle movement animation (turning and walking)
  builder.addCase(WALK, (state, action) => {
    const id = action.payload.id;
    const dir = action.payload.dir;
    let newX, newY, newDir;
    //check if walking
    if (state['players'][id]['dir'] === dir) {
      newX = state.players[id]['x'] + modifier[dir]['x'];
      newY = state.players[id]['y'] + modifier[dir]['y'];
    } else {
      // else turning
      newDir = dir;
    }
    const newStep =
      state.players[id]['step'] < maxSteps - 1
        ? state.players[id]['step'] + 1
        : 0;

    // console.log("id :>> ", id);
    // console.log("dir :>> ", dir);
    // console.log("directions[dir] :>> ", directions[dir]);
    // console.log("newX :>> ", newX);
    // console.log("newY :>> ", newX);
    // console.log("newDir :>> ", newX);

    state.players[id].x = newX ? newX : state.players[id]['x'];
    state.players[id].y = newY ? newY : state.players[id]['y'];
    state.players[id].dir = newDir ? newDir : state.players[id].dir;
    state.players[id].step = newStep;
    // state.players[id].socketId = state.localSocketId;
    return state;
  });

  builder.addCase(WALK_IN_PLACE, (state, action) => {
    const id = action.payload.id;
    const dir = action.payload.dir;
    let newDir;
    if (state['players'][id]['dir'] !== dir) {
      newDir = dir;
    }
    const newStep =
      state.players[id]['step'] < maxSteps - 1
        ? state.players[id]['step'] + 1
        : 0;
    state.players[id].dir = newDir ? newDir : state.players[id].dir;
    state.players[id].step = newStep;
    return state;
  });

  builder.addCase(SET_MAP_GUIDE, (state, action) => {
    state.mapGuide[action.payload.actionAsset] = true;
    state.mapRoute.routeName = action.payload.actionAsset;
  });
  builder.addCase(HIDE_MAP_GUIDE, (state, action) => {
    for (let key in state.mapGuide) {
      state.mapGuide[key] = false;
    }
    state.mapRoute.modalCanOpen = false;
    state.mapRoute.routeName = null;
  });
  builder.addCase(TOGGLE_MODAL_CAN_OPEN, (state, action) => {
    state.mapRoute.modalCanOpen = !state.mapRoute.modalCanOpen;
  });

  builder.addCase(UPDATE_OTHERS, (state, action) => {
    if (action.payload.id !== state.user.id) {
      state.players[action.payload.id] = action.payload;
    }
  });

  builder.addCase(SELECT_AVATAR, (state, action) => {
    state.players[state.localID].skin = action.payload.skin;
  });
  builder.addCase(JOIN_VIDEO, (state, action) => {
    //do nothing!
  });
  builder.addCase(SET_VIDEO_PARTICIPANTS, (state, action) => {
    state.video.socketArr = action.payload;
  });
  builder.addCase(SET_SOCKETID, (state, action) => {
    state.localSocketId = action.payload.id;
    if (state.players[state.localID] !== undefined) {
      state.players[state.localID]['socketId'] = action.payload.id;
    }
  });
  builder.addCase(USER_DISCONNECT, (state, action) => {
    const disconnectedId = action.payload;
    for (let key in state.players) {
      if (state.players[key]['socketId'] === disconnectedId) {
        delete state.players[key];
        break;
      }
    }
  });
  builder.addCase(RECEIVED_ANNOUNCEMENT, (state, action) => {
    console.log('received a in reducer:', action.payload);
  });
  builder.addCase(ANNOUNCEMENT, (state, action) => {
    state.outgoingGif.senderName = state.user.name;
    state.outgoingGif.senderAvatar = state.user.avatar;
    state.outgoingGif.gifObj = action.payload;
    console.log('Announcement gif obj action.payload :>> ', action.payload);
  });
});
