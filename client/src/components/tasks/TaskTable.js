import React, {useState} from 'react';
import { IoMdWarning } from 'react-icons/io';
import './tasks.css'
import "../rpgui.css";
import "nes.css/css/nes.min.css";
import TaskRow from './TaskRow';
import TaskForm from './TaskForm';
import Button from '../button/Button';
import ProjectUser from '../users/ProjectUser';

function TaskTable(props) {
  const {state, createTask} = props;
  const [showForm, setShowForm] = useState(false);
  
  const formatDate = date => {
    return date.split('T')[0]
  }

  
  const tasksList = state.tasks.map(task => {
    return (
      <TaskRow 
        key={task.id}
        id={task.id}
        name={task.name}
        description={task.description}
        status={task.status}
        priority={task.priorityLevel}
        startDate={formatDate(task.startDate)}
        endDate={formatDate(task.endDate)}
      />
    )
  })

  return (
    <div className='rpgui-content'>
      <div className='dashboard-layout rpgui-container framed-golden-2'>
        <div className='welcome'>
          <h1>Tasks</h1>
        </div>
          {showForm &&
            <TaskForm 
              setShowForm={setShowForm}
              onSave={createTask}
              state={state}
              projectID={state.current_project}
            /> 
          }
        <div className='rpgui-container framed'>
          {!showForm &&
            <Button onClick={() => setShowForm(true)}>
              New Task
            </Button>
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
              {tasksList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskTable;
