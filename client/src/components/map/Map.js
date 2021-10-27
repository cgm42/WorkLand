import { useSelector } from 'react-redux';
import Sprite from '../sprites';
import MapTile from './MapTile';
import './style.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Map({ x }) {
  const kanban = useSelector((state) => state.mapGuide.kanban);
  const userDashboard = useSelector((state) => state.mapGuide.userDashboard);
  const ganttChart = useSelector((state) => state.mapGuide.ganttChart);
  const projectDashboard = useSelector(
    (state) => state.mapGuide.projectDashboard
  );
  const taskList = useSelector((state) => state.mapGuide.taskList);
  const piano = useSelector((state) => state.mapGuide.piano);
  const { leftMargin, topMargin } = useWindowDimensions();
  return (
    <div
      id="map"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: `${topMargin}px`,
        left: `${leftMargin}px`,
      }}>
      <MapTile map={`officev3`} />
      {kanban && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 173, y: 20 }}
        />
      )}
      {userDashboard && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 558, y: 20 }}
        />
      )}
      {ganttChart && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 306, y: 20 }}
        />
      )}
      {projectDashboard && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 431, y: 20 }}
        />
      )}
      {taskList && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 691, y: 20 }}
        />
      )}
      {piano && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 336, y: 286 }}
        />
      )}
    </div>
  );
}

export default Map;
