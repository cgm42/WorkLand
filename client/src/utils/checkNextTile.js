import { MAP_TABLE } from "../constants/constants";
import { initX, initY, stepSize } from "../constants/constants";
function getNextTile(direction, x, y, key) {
  let position = { left: x, top: y };
  let newPos;
  //Map array coordinates:
  let X;
  let Y;
  console.log("direction :>> ", direction);
  console.log("postion :>> ", position);

  switch (direction) {
    case "ArrowDown":
      newPos = position.top + stepSize; // + 24;
      X = (position.left - (position.left % 32)) / 32;
      Y = (newPos - (newPos % 32)) / 32;
      console.log("checking next tile:");
      console.log("Y :>> ", Y);
      console.log("X :>> ", X);
      console.log("MAP_TABLE[Y][X][key] :>> ", MAP_TABLE[Y][X]);
      return MAP_TABLE[Y][X][key];

    case "ArrowLeft":
      newPos = position.left - stepSize; // + 192 - 18;
      X = (newPos - (newPos % 32)) / 32;
      Y = (position.top - (position.top % 32)) / 32;
      console.log("checking next tile:");
      console.log("Y :>> ", Y);
      console.log("X :>> ", X);
      console.log("MAP_TABLE[Y][X][key] :>> ", MAP_TABLE[Y][X][key]);
      return MAP_TABLE[Y][X][key];

    case "ArrowRight":
      newPos = position.left + stepSize; // + 192 + 18;
      X = (newPos - (newPos % 32)) / 32;
      Y = (position.top - (position.top % 32)) / 32;
      console.log("checking next tile:");
      console.log("Y :>> ", Y);
      console.log("X :>> ", X);
      console.log("MAP_TABLE[Y][X][key] :>> ", MAP_TABLE[Y][X][key]);
      return MAP_TABLE[Y][X][key];

    case "ArrowUp":
      newPos = position.top - stepSize; // - 2;
      X = (position.left - (position.left % 32)) / 32;
      Y = (newPos - (newPos % 32)) / 32;
      console.log("checking next tile:");
      console.log("Y :>> ", Y);
      console.log("X :>> ", X);
      console.log("MAP_TABLE[Y][X][key] :>> ", MAP_TABLE[Y][X][key]);
      return MAP_TABLE[Y][X][key];

    default:
  }
}

export default getNextTile;
