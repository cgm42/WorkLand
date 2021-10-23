import Actor from "../actor";
import useKeyPress from "../../hooks/useKeyPress";

import { useSelector, useDispatch } from "react-redux";
import {
  HIDE_MAP_GUIDE,
  WALK,
  WALK_IN_PLACE,
  SET_MAP_GUIDE,
} from "../../reducers/userReducer";
import { directions } from "../../utils/constants";
import checkNextTile from "../../utils/checkNextTile";
import { checkActionAsset } from "../../utils/checkActionAsset";

export default function Players({ socket }) {
  const localUserState = useSelector((state) => {
    return state.players[state.localID];
  });

  const playerListState = useSelector((state) => {
    return state.players;
  });
  const localIdState = useSelector((state) => {
    return state.localID;
  });
  const dispatch = useDispatch();

  function walk(dir) {
    // console.log("localUserState.x :>> ", localUserState.x);
    // console.log("localUserState.y :>> ", localUserState.y);

    if (checkNextTile(dir, localUserState.x, localUserState.y)["action"]) {
      const actionAsset = checkNextTile(
        dir,
        localUserState.x,
        localUserState.y
      )["asset"];
      dispatch(SET_MAP_GUIDE({ actionAsset }));
    } else {
      dispatch(HIDE_MAP_GUIDE());
    }
    if (checkNextTile(dir, localUserState.x, localUserState.y)["walk"]) {
      dispatch(WALK({ dir, id: localIdState }));
      return {
        type: "WALK",
        payload: JSON.stringify(localUserState),
      };
    }
    dispatch(WALK_IN_PLACE({ dir, id: localIdState })); //this action is NOT broadcasted
  }

  useKeyPress((e) => {
    e.preventDefault();
    return walk(e.key);
  });

  const playerListArr = Object.keys(playerListState).map((key) => (
    <Actor
      key={key}
      sprite={`/sprites/skins/${playerListState[key]["skin"]}.png`}
      dir={directions[playerListState[key]["dir"]]}
      step={playerListState[key]["step"]}
      position={{
        x: playerListState[key]["x"],
        y: playerListState[key]["y"],
      }}
      displayName={playerListState[key]["name"]}
    />
  ));
  return <div>{playerListArr}</div>;
}
