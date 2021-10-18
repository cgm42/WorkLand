import React from 'react';
import './SideNav.css';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { FaClipboardList, FaSpotify } from 'react-icons/fa';
import { MdGroup } from 'react-icons/md';
import { BsFillAlarmFill } from 'react-icons/bs';
import { RiLogoutCircleFill } from 'react-icons/ri';
const Sidenav = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <a href='#Dashboard'>
          <AiFillHome></AiFillHome>
        </a>
        <a href='#Tasks'>
          <FaClipboardList></FaClipboardList>
        </a>
        <a href='#Meeting'>
          <MdGroup></MdGroup>
        </a>
        <a href='#message'>
          <AiFillMessage></AiFillMessage>
        </a>
      </div>

      <div className='sidebar-bottom'>
        <a href='#'>
          <FaSpotify></FaSpotify>
        </a>
        <a href='#'>
          <BsFillAlarmFill></BsFillAlarmFill>
        </a>
        <a href='#login'>
          <RiLogoutCircleFill></RiLogoutCircleFill>
        </a>
      </div>
    </div>
  );
};

export default Sidenav;
