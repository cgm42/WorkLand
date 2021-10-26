import React, { useState } from 'react';
import Button from '../button/Button';
import DatePicker from 'react-date-picker';
import User from '../users/User';
import { useSelector } from "react-redux";

function TaskForm(props) {
  const userState = useSelector((state) => {
    return state.user;
  });

  const [name, setName] = useState(props.name || '');
  const [description, setDescription] = useState(props.description || '');
  const [startDate, onStart] = useState(new Date());
  const [endDate, onEnd] = useState(new Date());
  const [priority, setPriority] = useState(0);
  const [error, setError] = useState('');

  
  const {state, setShowForm, onSave, projectID, setEdit} = props;
  
  const team = state.projectTeams.filter((team) => {
    return team.projectId === projectID;
  });
  
  const usersList = [];
  
  for (const member of team) {
    for (const user of state.users) {
      if (user.id === member.userId) {
        usersList.push(user);
      }
    }
  }
  
  const usersListArray = usersList.map(user => {
    const {id, name, avatar} = user;
    return (
      <User
      key={id}
      id={id}
      avatar={avatar}
      name={name}
      />
    )
  });
    
  const validate = () => {
    const selectedUsers = document.getElementsByClassName('user-list--selected');

    const selectedUsersIDs = [];

    for (const user of selectedUsers) {
      selectedUsersIDs.push(user.id);
    }

    const task = {
      project_id: projectID,
      sprint_id: null,
      name,
      description,
      startDate,
      endDate,
      priority_level: priority,
      users: selectedUsersIDs
    };

    setError('');
    setShowForm(false);
    // setEdit(false);
    onSave(task);
  };
  
  const cancel = () => {
    setShowForm(false);
    // setEdit(false);
  };

  return (
    <div className='rpgui-container framed'>
      <form
        className='form'
        autoComplete='off'
        onSubmit={(e) => e.preventDefault()}
      >
        <label>
          Task name:
          <input
            value={name}
            type='text'
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            type='text'
            onChange={(e) => {
              setDescription(e.target.value);
              setError('');
            }}
          />
        </label>

        <div className="team-date-container">
          <label>
            Assignees:
            <ul className='rpgui users-container'>{usersListArray}</ul>
          </label>

          <label>
            Priority:
            <select className="rpgui-dropdown" onChange={(e) => setPriority(e.target.value)}>
              <option value={0}>Low</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </label>

          <div className='date'>
            <label>
              Start date:
              <DatePicker
                onChange={onStart}
                value={startDate}
                className='date-size'
              />
            </label>

            <label>
              End date:
              <DatePicker
                onChange={onEnd}
                value={endDate}
                className='date-size'
              />
            </label>
          </div>
        </div>
      </form>
      <div className='cancel-submit'>
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={validate}>Submit</Button>
      </div>
    </div>
  );
}

export default TaskForm;