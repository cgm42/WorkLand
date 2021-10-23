import Sprite from "../sprites";
import { spriteDimensions } from "../../utils/constants";
export default function Actor({
  sprite,
  position = { x: 0, y: 0 },
  step,
  dir,
  displayName,
}) {
  const { h, w } = spriteDimensions;
  const style = {
    position: "absolute",
    top: position.y - h * 0.4, //adjust position for display name above character
    left: position.x + w * 0.2,
  };
  return (
    <div>
      <div style={style}>{displayName}</div>
      <Sprite
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
