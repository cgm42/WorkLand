//web socket endpoint(our server)
export const wsEndpoint = 'ws://localhost:5080';

export const navBarHeight = 40;
//basemap size
export const basemapWidth = 1024;
export const basemapHeight = 704;

//number of pixel a character walks at a time
export const stepSize = 5;

//corresponds to filenames in /public/sprites/skins
export const avatarSkinArr = ['f1', 'f2', 'f3', 'dc1', 'dc2'];

//Zoom factor for sprite file names starting with f
export const spriteSizeFactorF = 1.35;

//Zoom factor for modern sprite files
export const spriteSizeFactorC = 1.5;

export const modifier = {
  ArrowDown: { x: 0, y: stepSize },
  ArrowLeft: { x: -stepSize, y: 0 },
  ArrowRight: { x: +stepSize, y: 0 },
  ArrowUp: { x: 0, y: -stepSize },
};

//initial coordinates on map
export const initX = 3;
export const initY = 3;

export const directions = {
  ArrowDown: 0,
  ArrowLeft: 1,
  ArrowRight: 2,
  ArrowUp: 3,
};

export const playerTemplate = {
  isJoined: true,
  x: initX * 32,
  y: initY * 32,
  dir: 'ArrowDown',
  step: 0,
  name: 'local user',
  skin: 'f1',
};
//sprite animation constants
export const spriteDimensions = { h: 32, w: 32 };
export const maxSteps = 3;

//Project Management Assets
const X = { walk: false, action: false, special: false };
const O = { walk: true, action: false, special: false };
const K = { walk: true, action: true, special: false, asset: 'kanban' };
const G = { walk: true, action: true, special: false, asset: 'ganttChart' };
const P = {
  walk: true,
  action: true,
  special: false,
  asset: 'projectDashboard',
};
const U = { walk: true, action: true, special: false, asset: 'userDashboard' };
const L = { walk: true, action: true, special: false, asset: 'taskList' };

//Cool features
const p = { walk: true, action: true, special: false, asset: 'piano' };

//each element in the nested array equals a tile on the x-axis
const OFFICE_MAP = [
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23
  [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X], // y = 0
  [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X], // y = 1
  [X, X, X, X, K, K, K, X, G, G, X, X, P, P, X, X, U, U, O, X, X, L, L, X], // y= 2
  [X, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, X], // y = 3
  [X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, O, X, X, X, X], // y = 4
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, X, X, X, X], // y = 5
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, X, X, X, X], // y = 6
  [X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, O, O, X, X, X], // y = 7
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, X, X, X, X], // y = 8
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, X, X, X, X], // y = 9
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, O, X, X, X], // y = 10
  [X, O, O, O, O, O, O, O, O, O, p, p, O, O, O, O, O, O, O, O, O, X, X, X], // y = 11
  [X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, O, O, O, X, X, X], // y = 12
  [X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, X], // y = 13
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, X, X, X, X, X, X, X, X, X], // y = 14
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, X, X, X, X, X, X, X, X, X], // y = 15
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, X, X, X, X, X, X, X, X, X], // y = 16
  [X, X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, X], // y = 17
  [X, X, X, X, X, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, X, X, X], // y = 18
  [X, O, O, O, O, O, O, O, O, O, O, O, X, X, X, X, X, X, X, X, X, X, X, X], // y = 19
  [X, O, O, O, O, O, O, O, O, O, O, O, X, X, X, X, X, X, X, X, X, X, X, X], // y = 20
  [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X], // y = 21
];

export const MAP_TABLE = OFFICE_MAP;
