import React, {useState, useContext} from 'react';
import { stateContext } from '../providers/StateProvider';
import './tasks.css'
import "../rpgui.css";
import "nes.css/css/nes.min.css";
import TaskRow from './TaskRow';
import TaskForm from './TaskForm';
import Button from '../button/Button';


function TaskTable(props) {
  const {state, createTask} = useContext(stateContext);
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
        status={task.currentStatus}
        priority={task.priorityLevel}
        startDate={formatDate(task.startDate)}
        endDate={formatDate(task.endDate)}
        users={state.users}
        taskTeams={state.taskTeams}
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
        <div className='rpgui-container framed '>
          <div className='table-container'>
            {!showForm &&
              <Button onClick={() => setShowForm(true) && document.getElementById('dialog-default').showModal()} title={'New Task'}>

              </Button>
            } 
            <section>
            <TaskForm 
              setShowForm={setShowForm}
              onSave={createTask}
              state={state}
              projectID={state.current_project}
            /> 
            </section>
          </div>


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
