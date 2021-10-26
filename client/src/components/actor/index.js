import Sprite from '../sprites';
import { spriteDimensions } from '../../utils/constants';
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
    top: position.y - h * 0.4, //adjust position for display name above character
    left: position.x + w * 0.2,
  };
  let nameToDisplay = displayName.match(/[^\s]+/);
  nameToDisplay = nameToDisplay.slice(0, 10);

  return (
    <div className="dimension">
      <div style={styleForDisplayName}>{nameToDisplay}</div>
      <Sprite
        style={{ width: '250%' }}
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
