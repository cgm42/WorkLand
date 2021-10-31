//web socket endpoint(our server)
export const wsEndpoint = 'ws://localhost:5080';

export const navBarHeight = 40;
//basemap size
export const basemapWidth = 1024;
export const basemapHeight = 704;

//number of pixel a character walks at a time
export const stepSize = 8;

//corresponds to filenames in /public/sprites/skins
export const avatarSkinArr = [
  // 'f1',
  // 'f2',
  // 'f3',
  'dc1',
  'dc2',
  'dc3',
  'dc4',
  'dc5',
  'dc6',
  'dc7',
  'dc8',
  'dc9',
  'dc10',
  'dc11',
  'dc12',
  'dc13',
  'dc14',
  'dc15',
  'dc16',
  'dc17',
  'dc18',
];

//Zoom factor for sprite file names starting with f
export const spriteSizeFactorF = 1.35;

//Zoom factor for modern sprite files
export const spriteSizeFactorC = 1.7;

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
  skin: null,
};
//sprite animation constants
export const spriteDimensions = { h: 32, w: 32 };
export const maxSteps = 3;

//Project Management Assets
const X = { walk: false, action: false, special: false };
const O = { walk: true, action: false, special: false };
const K = { walk: true, action: true, special: false, asset: 'kanban' };
const k = { walk: false, action: true, special: false, asset: 'kanban' };
const G = { walk: true, action: true, special: false, asset: 'ganttChart' };
const g = { walk: false, action: true, special: false, asset: 'ganttChart' };
const P = {
  walk: true,
  action: true,
  special: false,
  asset: 'projectDashboard',
};
const p = {
  walk: false,
  action: true,
  special: false,
  asset: 'projectDashboard',
};
const U = { walk: true, action: true, special: false, asset: 'userDashboard' };
const u = { walk: false, action: true, special: false, asset: 'userDashboard' };
const L = { walk: true, action: true, special: false, asset: 'taskList' };
const l = { walk: false, action: true, special: false, asset: 'taskList' };

//Cool features
const Q = { walk: true, action: true, special: false, asset: 'piano' };
const q = { walk: false, action: true, special: false, asset: 'piano' };
const J = { walk: true, action: true, special: false, asset: 'guitar' };
const j = { walk: false, action: true, special: false, asset: 'guitar' };
const T = { walk: true, action: true, special: false, asset: 'tetris' };
const t = { walk: false, action: true, special: false, asset: 'tetris' };

//each element in the nested array equals a tile on the x-axis
const OFFICE_MAP = [
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23
  [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X], // y = 0
  [X, X, X, X, p, p, p, X, l, l, X, X, k, k, X, X, g, g, X, X, X, u, u, X], // y = 1
  [X, X, X, X, P, P, P, O, L, L, O, O, K, K, X, X, G, G, O, X, X, U, U, X], // y= 2
  [X, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, X], // y = 3
  [X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, O, X, X, X, X], // y = 4
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, X, X, X, X], // y = 5
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, X, X, X, X], // y = 6
  [X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, O, O, X, X, X], // y = 7
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, X, X, X, X], // y = 8
  [X, X, X, X, X, X, X, X, X, X, X, X, O, O, O, O, O, O, O, O, X, X, X, X], // y = 9
  [X, X, X, X, t, t, X, j, X, X, q, q, O, O, O, O, O, O, O, O, O, X, X, X], // y = 10
  [X, O, O, T, T, O, J, J, O, O, Q, Q, O, O, O, O, O, O, O, O, O, X, X, X], // y = 11
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

export const kanbanData = { h: 180, w: 279, x: 0, y: 0 };
export const kanbanPosition = { x: 325, y: -68 };
export const projectData = { h: 180, w: 350, x: 0, y: 0 };
export const projectPosition = { x: 62, y: -76 };
export const taskData = { h: 225, w: 280, x: 0, y: 0 };
export const taskPosition = { x: 176, y: -85 };
export const userData = { h: 180, w: 351, x: 0, y: 0 };
export const userPosition = { x: 561, y: -78 };
export const ganttChartData = { h: 180, w: 306, x: 0, y: 0 };
export const ganttChartPosition = { x: 437, y: -68 };
