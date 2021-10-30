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
  const guitar = useSelector((state) => state.mapGuide.guitar);
  const tetris = useSelector((state) => state.mapGuide.tetris);
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
      <MapTile map={`officev5`} />
      {kanban && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/kanban.gif'}
          data={{ h: 180, w: 279, x: 0, y: 0 }}
          position={{ x: 83, y: -68 }}
        />
      )}
      {userDashboard && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/dashboard.gif'}
          data={{ h: 180, w: 351, x: 0, y: 0 }}
          position={{ x: 437, y: -68 }}
        />
      )}
      {ganttChart && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/schedule.gif'}
          data={{ h: 180, w: 306, x: 0, y: 0 }}
          position={{ x: 206, y: -60 }}
        />
      )}
      {projectDashboard && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/projects.gif'}
          data={{ h: 180, w: 350, x: 0, y: 0 }}
          position={{ x: 310, y: -68 }}
        />
      )}
      {taskList && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/tasks.gif'}
          data={{ h: 225, w: 280, x: 0, y: 0 }}
          position={{ x: 561, y: -78 }}
        />
      )}
      {piano && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 336, y: 286 }}
        />
      )}
      {guitar && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 225, y: 286 }}
        />
      )}
      {tetris && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 145, y: 286 }}
        />
      )}
    </div>
  );
}

export default Map;
