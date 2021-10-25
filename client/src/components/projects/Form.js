import React, {useState} from "react";
import Button from "../button/Button";
// import UserList from "../Users/UserList";

function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [description, setDescription] = useState(props.description || "");
  const [users, setUsers] = useState(props.users || []);
  const [startDate, setStartDate] = useState('2021-10-25');
  // const [startDate, setStartDate] = useState(props.startDate || null);
  const [endDate, setEndDate] = useState('2021-10-30');
  // const [endDate, setEndDate] = useState(props.endDate || null);
  const [error, setError] = useState("");

  const {setShowForm, onSave} = props;

  const validate = () => {
    const project = {
      creatorID: 10,
      name,
      description,
      startDate,
      endDate
    }

    setError("");
    setShowForm(false);
    onSave(project);
  }

  const cancel = () => {
    setShowForm(false);
  }

  return (
    <div className="rpgui-container framed">
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <label>
          Project name:
          <input 
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
          />
        </label>

        <label>
          Description:
          <textarea 
            value={description}
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
              setError("");
            }}
          />
        </label>
        
        <label>
          Start date:
          <input
            value={startDate}
          />
        </label>

        <label>
          End date:
          <input
            value={endDate}
          />
        </label>
      </form>
      <Button onClick={cancel}>Cancel</Button>
      <Button onClick={validate}>Submit</Button>
    </div>
  )
};

export default Form;