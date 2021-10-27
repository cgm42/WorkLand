import Sprite from '../sprites';
import {
  spriteDimensions,
  spriteSizeFactorF,
  spriteSizeFactorC,
} from '../../utils/constants';
import './actor.css';

export default function Actor({
  sprite,
  position = { x: 0, y: 0 },
  step,
  dir,
  displayName,
}) {
  const { h, w } = spriteDimensions;
  const styleForDisplayName = {
    position: 'absolute',
    top: position.y - h * 0.8, //adjust position for display name above character
    left: position.x - displayName.length - 8, //8 is an adjustment factor to display name on top of character
  };
  let nameToDisplay = displayName.match(/[^\s]+/);
  nameToDisplay = nameToDisplay.slice(0, 10);

  return (
    <div className="dimension">
      <div style={styleForDisplayName}>{nameToDisplay}</div>
      <Sprite
        zoom={
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
