import React, { useState } from 'react';
import Button from '../button/Button';
import DatePicker from 'react-date-picker';
import User from '../users/User';
import { useSelector } from 'react-redux';

function ProjectForm(props) {
  const userState = useSelector((state) => {
    // console.log("state:", state);
    return state.user;
  });

  const [name, setName] = useState(props.name || '');
  const [description, setDescription] = useState(props.description || '');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showUsers, setShowUsers] = useState(false);
  const [error, setError] = useState('');

  const { usersList, onSave } = props;

  const validate = () => {
    if (!!!name) {
      setError('Please enter a name');
      return;
    }
    if (!!!description) {
      setError('Please enter a description');
      return;
    }

    const selectedUsers = document.getElementsByClassName(
      'user-list--selected'
    );

    const selectedUsersIDs = [];

    for (const user of selectedUsers) {
      selectedUsersIDs.push(parseInt(user.id));
    }

    const project = {
      creatorID: userState.id,
      name,
      description,
      startDate,
      endDate,
      users: selectedUsersIDs
    };

    setName('');
    setDescription('');
    setStartDate(new Date());
    setEndDate(new Date());
    setShowUsers(false);
    setError('');
    onSave(project);
    document.getElementById('dialog-dark-rounded').close();
  };

  const cancel = () => {
    setName('');
    setDescription('');
    setStartDate(new Date());
    setEndDate(new Date());
    setShowUsers(false);
    setError('');
    document.getElementById('dialog-dark-rounded').close();
  };

  return (
    <div>
      <Button
        type='button'
        onClick={() => {
          setShowUsers(true);
          document.getElementById('dialog-dark-rounded').showModal();
        }}
        title={'NEW'}
      ></Button>
      <dialog
        className='nes-dialog is-dark is-rounded'
        id='dialog-dark-rounded'
      >
        <form
          className='form'
          autoComplete='off'
          onSubmit={(e) => e.preventDefault()}
          method='dialog'
        >
          {error && <p className='error'>{error}</p>}
          <div className='form-label'>
            <label>
              <p>Project name:</p>
              <input
                value={name}
                type='text'
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                onKeyDown={(ev) => {
                  if (
                    ev.code === 'Space' ||
                    ev.code === 'ArrowUp' ||
                    ev.code === 'ArrowDown' ||
                    ev.code === 'ArrowLeft' ||
                    ev.code === 'ArrowRight'
                  ) {
                    ev.stopPropagation();
                  }
                }}
              />
            </label>

            <label>
              <p>Description:</p>
              <textarea
                value={description}
                type='text'
                onChange={(e) => {
                  setDescription(e.target.value);
                  setError('');
                }}
                onKeyDown={(ev) => {
                  if (
                    ev.code === 'Space' ||
                    ev.code === 'ArrowUp' ||
                    ev.code === 'ArrowDown' ||
                    ev.code === 'ArrowLeft' ||
                    ev.code === 'ArrowRight'
                  ) {
                    ev.stopPropagation();
                  }
                }}
              />
            </label>
          </div>

          <div className='team-date-container'>
            {showUsers && (
              <label>
                Choose your team:
                <ul className='rpgui users-container'>
                  {usersList.map((user) => {
                    if (user.id !== userState.id) {
                      const { id, name, avatar } = user;
                      return (
                        <User key={id} id={id} avatar={avatar} name={name} />
                      );
                    }
                  })}
                </ul>
              </label>
            )}

            <div className='date'>
              <label>
                Start date:
                <DatePicker
                  onChange={setStartDate}
                  value={startDate}
                  className='date-size'
                />
              </label>

              <label>
                End date:
                <DatePicker
                  onChange={setEndDate}
                  value={endDate}
                  minDate={new Date(startDate)}
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
