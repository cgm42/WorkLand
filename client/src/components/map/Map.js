import { useSelector } from 'react-redux';
import Sprite from '../sprites';
import MapTile from './MapTile';
import './style.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Map({ x }) {
  const kanbanGuideState = useSelector((state) => state.mapGuide.kanban);
  const { width } = useWindowDimensions();
  if (width < 1024) {
    const left = 0;
  }
  console.log('width :>> ', width);
  const left = (width - 1024) / 2;
  return (
    // <div
    //   id="map"
    //   style={{
    //     zIndex: -1,
    //     position: "absolute",
    //     top: 0,
    //     left: -x,
    //   }}>
    //   <MapTile map={`officev0`} />
    <div
      id="map"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: `${left}px`,
      }}>
      <MapTile map={`officev1`} />
      {kanbanGuideState && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 173, y: 0 }}
        />
      )}
    </div>
  );
}

export default Map;
