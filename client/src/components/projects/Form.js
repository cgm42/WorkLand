import React, {useState} from "react";
import Button from "../button/Button";
// import UserList from "../Users/UserList";

function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [description, setDescription] = useState(props.description || "");
  const [users, setUsers] = useState(props.users || []);
  const [startDate, setStartDate] = useState(props.startDate || null);
  const [endDate, setEndDate] = useState(props.endDate || null);
  const [error, setError] = useState("");

  return (
    <div className="rpgui-container framed">
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <input 
          
        />
        <input 
        
        />
      </form>
    </div>
  )
};

export default Form;