export default function Sprite({ image, data, position, zoom }) {
  const { y, x, h, w } = data;

  const style = {
    position: 'absolute',
    height: `${h}px`,
    width: `${w}px`,
    top: position.y,
    left: position.x,
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `-${x}px -${y}px`,
    transform: `scale(${zoom})`,
  };

  return <div style={style} />;
}
