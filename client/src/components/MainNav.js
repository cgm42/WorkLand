import React from 'react';
import './styles/MainNav.css';
import { FaClipboardList } from 'react-icons/fa';
import useWindowDimensions from '../hooks/useWindowDimensions';


function MainNav() {
  const { width, height, topMargin, leftMargin } = useWindowDimensions();
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div >

        </div>
      </div>
    </div>
  );
}

export default MainNav;
