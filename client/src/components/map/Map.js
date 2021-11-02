import { useSelector } from 'react-redux';
import Sprite from '../sprites';
import MapTile from './MapTile';
import './style.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import {
  kanbanPosition,
  kanbanData,
  projectData,
  projectPosition,
  taskData,
  taskPosition,
  ganttChartPosition,
  ganttChartData,
  userData,
  userPosition,
} from '../../utils/constants';

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
  const globe = useSelector((state) => state.mapGuide.globe);
  const reception = useSelector((state) => state.mapGuide.reception);
  const win98 = useSelector((state) => state.mapGuide.win98);

  const { leftMargin, topMargin } = useWindowDimensions();
  return (
    <div
      id="map"
      style={{
        position: 'absolute',
        top: `${topMargin}px`,
        left: `${leftMargin}px`,
      }}>
      <MapTile map={`officev6`} />
      {kanban && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/kanban.gif'}
          data={kanbanData}
          position={kanbanPosition}
        />
      )}
      {userDashboard && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/about.gif'}
          data={userData}
          position={userPosition}
        />
      )}
      {ganttChart && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/schedule.gif'}
          data={ganttChartData}
          position={ganttChartPosition}
        />
      )}
      {projectDashboard && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/projects.gif'}
          data={projectData}
          position={projectPosition}
        />
      )}
      {taskList && (
        <Sprite
          zoom={0.4}
          image={'/sprites/bubbles/tasks.gif'}
          data={taskData}
          position={taskPosition}
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
      {globe && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 32, w: 32, x: 0, y: 0 }}
          position={{ x: 560, y: 480 }}
        />
      )}
      {reception && (
        <Sprite
          zoom={0.3}
          image={'/sprites/bubbles/welcome.gif'}
          data={{ h: 180, w: 288, x: 0, y: 0 }}
          position={{ x: 5, y: 456 }}
        />
      )}
      {win98 && (
        <Sprite
          image={'/sprites/action.png'}
          data={{ h: 180, w: 288, x: 0, y: 0 }}
          position={{ x: 45, y: 286 }}
        />
      )}
    </div>
  );
}

export default Map;
