import React from 'react';
import { IoMdWarning } from 'react-icons/io';
import './tasks.css'
import "../rpgui.css";
import "nes.css/css/nes.min.css";

function Tasks() {
  return (
    <div className='rpgui-content'>
      <div className='dashboard-layout rpgui-container framed-golden-2'>
        <div className='welcome'>
          <h1>Tasks</h1>
        </div>

        <table className='rpgui-container framed-golden table'>
          <thead>
          <tr>
            <th>Tasks</th>
            <th>Users</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Fix the home page button</td>
            <td >Jake</td>
            <td>Complete</td>
            <td className='priority'><IoMdWarning className='icon'/></td>
            <td> 2021-10-26</td>
            <td> 2021-10-27</td>
          </tr>
          <tr>
            <td>Fix the home page button</td>
            <td>Jake</td>
            <td>Complete</td>
            <td><IoMdWarning className='icon'/></td>
            <td> 2021-10-26</td>
            <td> 2021-10-27</td>
          </tr>
          <tr>
            <td>Fix the home page button</td>
            <td>Jake</td>
            <td>Complete</td>
            <td><IoMdWarning className='icon'/></td>
            <td> 2021-10-26</td>
            <td> 2021-10-27</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
