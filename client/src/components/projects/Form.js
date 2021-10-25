import React, { useState } from 'react';
import Button from '../button/Button';
import DatePicker from 'react-date-picker';
// import UserList from "../Users/UserList";
import User from '../users/User';

function Form(props) {
  const [name, setName] = useState(props.name || '');
  const [description, setDescription] = useState(props.description || '');
  const [users, setUsers] = useState(props.users || []);
  const [error, setError] = useState('');
  const [startDate, onStart] = useState(new Date());
  const [endDate, onEnd] = useState(new Date());

  const {usersList, setShowForm, onSave} = props;

  const usersListArray = usersList.map(user => {
    console.log("in usersList:", user.name);
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

  console.log("users list array:", usersListArray)

  const validate = () => {
    const project = {
      creatorID: 10,
      name,
      description,
      startDate,
      endDate
    };

    setError('');
    setShowForm(false);
    onSave(project);
  };

  const cancel = () => {
    setShowForm(false);
  };

  return (
    <div className='rpgui-container framed'>
      <form
        className='form'
        autoComplete='off'
        onSubmit={(e) => e.preventDefault()}
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
            Team members:
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
      </form>
      <div className='cancel-submit'>
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={validate}>Submit</Button>
      </div>
    </div>
  );
}

export default Form;
