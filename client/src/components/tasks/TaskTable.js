import React, {useState} from 'react';
import { IoMdWarning } from 'react-icons/io';
import './tasks.css'
import "../rpgui.css";
import "nes.css/css/nes.min.css";
import TaskRow from './TaskRow';
import TaskForm from './TaskForm';
import Button from '../button/Button';

function TaskTable() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='rpgui-content'>
      <div className='dashboard-layout rpgui-container framed-golden-2'>
        <div className='welcome'>
          <h1>Tasks</h1>
        </div>
        <div className='rpgui-container framed'>
          {!showForm &&
            <Button onClick={() => setShowForm(true)}>
              New Task
            </Button>
          } 

          {showForm &&
            <TaskForm 
              setShowForm={setShowForm}
              usersList={state.users}
              onSave={createProject}
            /> 
          }

          <table className='table'>
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
            <TaskRow />
            <TaskRow />
            <TaskRow />
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
    </div>
  );
}

export default TaskTable;
