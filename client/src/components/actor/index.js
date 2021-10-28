import Sprite from '../sprites';
import {
  spriteDimensions,
  spriteSizeFactorF,
  spriteSizeFactorC,
} from '../../utils/constants';
import './actor.css';
import { useSelector } from 'react-redux';
import useMapGuide from './../../hooks/useMapGuide';

export default function Actor({
  sprite,
  position = { x: 0, y: 0 },
  step,
  dir,
  displayName,
}) {
  const { playerNearGuide } = useMapGuide();
  const { h, w } = spriteDimensions;
  const opacityStyle = { opacity: '0.5' };
  let styleForDisplayName = {
    position: 'absolute',
    top: position.y - h * 0.8, //adjust position for display name above character
    left: position.x - displayName.length - 8, //8 is an adjustment factor to display name on top of character
  };
  let styleForDisplayNameAtGuide = '';
  if (playerNearGuide) {
    styleForDisplayNameAtGuide = { ...styleForDisplayName, ...opacityStyle };
    console.log('styleForDisplayNameAtGuide :>> ', styleForDisplayNameAtGuide);
  }

  let nameToDisplay = displayName.match(/[^\s]+/);
  nameToDisplay = nameToDisplay.slice(0, 10);

  return (
    <div className="dimension">
      {styleForDisplayNameAtGuide !== '' ? (
        <div style={styleForDisplayNameAtGuide}>{nameToDisplay}</div>
      ) : (
        <div style={styleForDisplayName}>{nameToDisplay}</div>
      )}

      <Sprite
        zoom={
          //check file name to apply different zoom level for character rendering
          sprite.slice(-6, -5) === 'f' ? spriteSizeFactorF : spriteSizeFactorC
        }
        image={sprite}
        data={{
          x: step * w,
          y: dir * h,
          w,
          h,
        }}
        position={position}
      />
    </div>
  );
}
