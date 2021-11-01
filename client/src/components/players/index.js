import Actor from '../actor';
import { useState } from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import { useSelector, useDispatch } from 'react-redux';
import {
  HIDE_MAP_GUIDE,
  WALK,
  WALK_IN_PLACE,
  SET_MAP_GUIDE,
  TOGGLE_MODAL_CAN_OPEN,
} from '../../reducers/mapReducer';
import { directions } from '../../utils/constants';
import checkNextTile from '../../utils/checkNextTile';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Players({ socket }) {
  const { leftMargin, topMargin } = useWindowDimensions();
  const gifSearchOpen = useSelector((state) => state.gifSearchOpen);
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
    if (checkNextTile(dir, localUserState.x, localUserState.y)['action']) {
      const actionAsset = checkNextTile(
        dir,
        localUserState.x,
        localUserState.y
      )['asset'];
      dispatch(SET_MAP_GUIDE({ actionAsset }));
    } else {
      dispatch(HIDE_MAP_GUIDE());
    }
    if (checkNextTile(dir, localUserState.x, localUserState.y)['walk']) {
      dispatch(WALK({ dir, id: localIdState }));
      return {
        type: 'WALK',
        payload: JSON.stringify(localUserState),
      };
    }
    dispatch(WALK_IN_PLACE({ dir, id: localIdState })); //this action is NOT broadcasted
  }

  useKeyPress((e) => {
    // e.preventDefault();
    if (
      e.key === 'ArrowDown' ||
      e.key === 'ArrowUp' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight'
    ) {
      walk(e.key);
      return;
    }
    if (e.code === 'Space' && !gifSearchOpen) {
      dispatch(TOGGLE_MODAL_CAN_OPEN());
    }
  });

  const playerListArr = Object.keys(playerListState).map((key) => (
    <Actor
      key={key}
      sprite={`/sprites/skins/${playerListState[key]['skin']}.png`}
      dir={directions[playerListState[key]['dir']]}
      step={playerListState[key]['step']}
      position={{
        x: playerListState[key]['x'] + leftMargin,
        y: playerListState[key]['y'] + topMargin,
      }}
      displayName={playerListState[key]['name']}
    />
  ));
  return <div>{playerListArr}</div>;
}
