import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri';
import Button from '../button/Button';

function DeleteTaskForm(props) {
  const {id} = props

  const confirm = () => {
    // onSave(task);
    document.getElementById('delete').close();
  };

  const cancel = () => {
    document.getElementById('delete').close();
    // setEdit(false);
  };

  const makeId = (id) => {
    return `dialog-dark-rounded-edit-${id}`;
  };
  return (
    <div>
      <div className='delete-icon'>
      <RiDeleteBinLine onClick={() => document.getElementById('delete').showModal()} ></RiDeleteBinLine>
      </div>
      <dialog className='nes-dialog is-dark is-rounded' id='delete'>
        <form
          className='form'
          autoComplete='off'
          onSubmit={(e) => e.preventDefault()}
          method='dialog'
        >
          <h1 className='warning'>Are you sure you want to delete this task?</h1>
          <div className='cancel-submit'>
            <Button onClick={cancel} title={'Cancel'}></Button>
            <Button onClick={confirm} title={'Confirm'}></Button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default DeleteTaskForm
