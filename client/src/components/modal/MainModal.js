import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_MODAL_CAN_OPEN } from '../../reducers/mapReducer';
import './modal.css';
import UserDashboard from '../userDashboard/UserDashboard';
import ProjectCardList from '../projects/projectCardList';
import Kanban from '../kanban/Kanban';
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
        {mapRoute === 'userDashboard' ? <UserDashboard /> : <div />}
        {mapRoute === 'kanban' ? <Kanban /> : <div />}
        {mapRoute === 'ganttChart' ? (
          <div>gantt chart lives here</div>
        ) : (
          <div />
        )}
        {mapRoute === 'projectDashboard' ? (
          <div>project dashboard lives here</div>
        ) : (
          <div />
        )}

        {/* <div>
          <ProjectCardList />
        </div> */}
      </Modal>
    </>
  );
}

export default MainModal;
