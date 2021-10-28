import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function useMapGuide(fn) {
  const mapGuideState = useSelector((state) => state.mapGuide);

  let playerNearGuide = false;
  for (let key in mapGuideState) {
    if (mapGuideState[key]) {
      playerNearGuide = true;
      break;
    }
  }

  return { playerNearGuide };
}
