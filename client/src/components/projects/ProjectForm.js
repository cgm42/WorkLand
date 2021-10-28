import React, { useState } from 'react';
import Button from '../button/Button';
import DatePicker from 'react-date-picker';
import User from '../users/User';
import { useSelector } from "react-redux";

function ProjectForm(props) {
  const userState = useSelector((state) => {
    console.log('state:', state);
    return state.user;
  });

  const [name, setName] = useState(props.name || '');
  const [description, setDescription] = useState(props.description || '');
  const [error, setError] = useState('');
  const [startDate, onStart] = useState(new Date());
  const [endDate, onEnd] = useState(new Date());

  const {usersList, setShowForm, onSave, setEdit} = props;

  const usersListArray = usersList.map(user => {
    if (user.id !== userState.id) {
      const {id, name, avatar} = user;
        return (
          <User
            key={id}
            id={id}
            avatar={avatar}
            name={name}
          />
        )
    }
  });

  

  const validate = () => {
    const selectedUsers = document.getElementsByClassName('user-list--selected');

    const selectedUsersIDs = [];

    for (const user of selectedUsers) {
      selectedUsersIDs.push(user.id);
    }

    const project = {
      creatorID: userState.id,
      name,
      description,
      startDate,
      endDate,
      users: selectedUsersIDs
    };

    setError('');
    setShowForm(false);
    // setEdit(false);
    onSave(project);
    document.getElementById('dialog-dark-rounded').close()
  };
  
  const cancel = () => {
    document.getElementById('dialog-dark-rounded').close()

    // setEdit(false);
  };

  return (
    <div>
    <Button type="button" onClick={() => document.getElementById('dialog-dark-rounded').showModal()} title={'New Project'}>
    </Button>
    <dialog className="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
      <form
        className='form'
        autoComplete='off'
        onSubmit={(e) => e.preventDefault()}
        method="dialog"
      >
        <label>
          Project name:
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
            Choose your team:
            <ul className='rpgui users-container'>{usersListArray}</ul>
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
      <div className='cancel-submit'>
        <Button onClick={cancel} title={'cancel'}></Button>
        <Button onClick={validate} title={'submit'}></Button>
      </div>
      </form>
      </dialog>
    </div>
  );
}

export default ProjectForm;
