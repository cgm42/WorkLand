import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function useMapGuide(fn) {
  const mapGuideState = useSelector((state) => state.mapGuide);
  // const [playerNearGuide, setPlayerNearGuide] = useState(false);
  // useEffect(() => {
  let playerNearGuide = false;
  for (let key in mapGuideState) {
    if (mapGuideState[key]) {
      playerNearGuide = true;
      console.log('playerNearGuide  in hook:>> ', playerNearGuide);
      break;
    }
  }
  // }, [mapGuideState]);

  return { playerNearGuide };
}
