import { MAP_TABLE } from '../utils/constants';
import { initX, initY, stepSize } from '../utils/constants';
function getNextTile(direction, x, y) {
  //relative position related x and y
  let position = { left: x, top: y };
  let newPos;
  //Map array coordinates:
  let X;
  let Y;
  // console.log("direction :>> ", direction);
  // console.log("postion :>> ", position);

  switch (direction) {
    case 'ArrowDown':
      newPos = position.top + stepSize;
      X = (position.left - (position.left % 32)) / 32;
      Y = (newPos - (newPos % 32)) / 32;

      return MAP_TABLE[Y][X];

    case 'ArrowLeft':
      newPos = position.left - stepSize;
      X = (newPos - (newPos % 32)) / 32;
      Y = (position.top - (position.top % 32)) / 32;

      return MAP_TABLE[Y][X];

    case 'ArrowRight':
      newPos = position.left + stepSize;
      X = (newPos - (newPos % 32)) / 32;
      Y = (position.top - (position.top % 32)) / 32;

      return MAP_TABLE[Y][X];

    case 'ArrowUp':
      newPos = position.top - stepSize;
      X = (position.left - (position.left % 32)) / 32;
      Y = (newPos - (newPos % 32)) / 32;

      return MAP_TABLE[Y][X];

    default:
  }
}

export default getNextTile;
