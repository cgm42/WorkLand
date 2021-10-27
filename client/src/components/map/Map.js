import { useSelector } from 'react-redux';
import Sprite from '../sprites';
import MapTile from './MapTile';
import './style.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Map({ x }) {
  const kanbanGuideState = useSelector((state) => state.mapGuide.kanban);
  const { leftMargin, topMargin } = useWindowDimensions();
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
        top: `${topMargin}px`,
        left: `${leftMargin}px`,
      }}>
      <MapTile map={`officev2`} />
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
