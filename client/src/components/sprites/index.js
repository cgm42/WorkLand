export default function Sprite({ image, data, position }) {
  const { y, x, h, w } = data;
  const style = {
    position: "absolute",
    height: `${h}px`,
    width: `${w}px`,
    top: position.y,
    left: position.x,
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `-${x}px -${y}px`,
  };

  return <div style={style} />;
}
