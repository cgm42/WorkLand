import { createReducer, createAction } from '@reduxjs/toolkit';
import {
  directions,
  modifier,
  maxSteps,
  playerTemplate,
} from '../utils/constants';
import { initX, initY } from '../utils/constants';

//a temp user id

const initialState = {
  localID: 'local',
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
    // },
  },
  mapGuide: {
    userDashboard: false,
    projectDashboard: false,
    kanban: false,
    ganttChart: false,
    taskList: false,
    piano: false,
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
});
