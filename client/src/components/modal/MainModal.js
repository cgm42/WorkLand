import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_MODAL_CAN_OPEN } from '../../reducers/mapReducer';
import './modal.css';
import UserDashboard from '../userDashboard/UserDashboard';
import ProjectCardList from '../projects/projectCardList';
import Kanban from '../kanban/Kanban';
import TaskTable from '../tasks/TaskTable';
import PianoComp from '../piano';
import GuitarComp from '../guitar';
import Tetris from '../game';
function MainModal(props) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(props.isOpen);
  const mapRoute = useSelector((state) => state.mapRoute.routeName);
  return (
    <>
      <Modal isOpen={modalIsOpen} ariaHideApp={false}>
        <button
          onClick={() => {
            setModalIsOpen(false);
            dispatch(TOGGLE_MODAL_CAN_OPEN());
          }}>
          close
        </button>
        {/* {===============project management features==========} */}
        {mapRoute === 'userDashboard' ? <UserDashboard /> : <div />}
        {mapRoute === 'kanban' ? <Kanban /> : <div />}
        {mapRoute === 'ganttChart' ? (
          <div>gantt chart lives here</div>
        ) : (
          <div />
        )}
        {mapRoute === 'projectDashboard' ? <ProjectCardList /> : <div />}
        {mapRoute === 'taskList' ? <TaskTable /> : <div />}

        {/* <div>
          <ProjectCardList />
        </div> */}

        {/* {===============cool features==================} */}
        {mapRoute === 'piano' ? (
          <div>
            <PianoComp></PianoComp>
          </div>
        ) : (
          <div />
        )}
        {mapRoute === 'guitar' ? (
          <div>
            <GuitarComp></GuitarComp>
          </div>
        ) : (
          <div />
        )}
        {mapRoute === 'tetris' ? (
          <div>
            <Tetris xSize="14" ySize="20"></Tetris>
          </div>
        ) : (
          <div />
        )}
      </Modal>
    </>
  );
}

export default MainModal;
