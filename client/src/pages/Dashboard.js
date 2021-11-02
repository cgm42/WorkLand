import React from 'react';
import { useSelector } from 'react-redux';
import 'nes.css/css/nes.min.css';
import '../components/styles/animations.css';
import Players from '../components/players';
import Map from '../components/map/Map';
import ModalInput from '../components/modal/ModalInput';
import MainModal from '../components/modal/MainModal';
import useMapGuide from './../hooks/useMapGuide';
import Chat from '../components/chat/chat';
import MainNav from '../components/MainNav';

const Dashboard = () => {
  const { playerNearGuide } = useMapGuide();
  const modalCanOpen = useSelector((state) => state.mapRoute.modalCanOpen);
  const gifSearchOpen = useSelector((state) => state.gifSearchOpen);

  return (
    <div className="dashboard-layout stars" id="snow">
      <div className="twinkling">
        {modalCanOpen && playerNearGuide && <MainModal isOpen={true} className="main-modal"/>}
        {/* {!(modalCanOpen && playerNearGuide) && <MainNav></MainNav>} */}
        <ModalInput isOpen={true} />
        <Map x={0} />
        <Players />
        {<Chat canOpen={!(modalCanOpen && playerNearGuide)} />}
      </div>
    </div>
  );
};

export default Dashboard;
