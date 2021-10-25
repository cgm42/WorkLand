import React, { useState } from 'react';
import Button from '../button/Button';
import DatePicker from 'react-date-picker';
// import UserList from "../Users/UserList";

function Form(props) {
  const [name, setName] = useState(props.name || '');
  const [description, setDescription] = useState(props.description || '');
  const [users, setUsers] = useState(props.users || []);
  const [startDate, setStartDate] = useState('2021-10-25');
  // const [startDate, setStartDate] = useState(props.startDate || null);
  const [endDate, setEndDate] = useState('2021-10-30');
  // const [endDate, setEndDate] = useState(props.endDate || null);
  const [error, setError] = useState('');
  const [startValue, onStart] = useState(new Date());
  const [endValue, onEnd] = useState(new Date());
  
  const { setShowForm, onSave } = props;

  console.log(name);

  const validate = () => {
    const creatorID = 10;
    setError('');
    setShowForm(false);
    onSave(creatorID, name, description, startDate, endDate);
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
        <div className='date'>
          <label>
            Start date:
            <DatePicker onChange={onStart} value={startValue} className='date-size'/>
          </label>

          <label>
            End date:
            <DatePicker onChange={onEnd} value={endValue} className='date-size'/>
          </label>
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
