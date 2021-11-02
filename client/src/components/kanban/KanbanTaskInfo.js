import React from 'react';
import { BiShow } from 'react-icons/bi';

function KanbanTaskInfo(props) {
  return (
    <div>
      <BiShow
        type='button'
        className='show-more'
        onClick={() => {
          document.getElementById('dialog-dark').showModal();
        }}
      ></BiShow>
      <dialog className='nes-dialog is-dark task-dialog' id='dialog-dark'>
        <form method='dialog'>
          <h1>Task Name:</h1>
          <p className='title'>{props.title}</p>
          <h1>Description:</h1>
          <p>{props.description}</p>
          <menu className='dialog-menu'>
            <button className='nes-btn is-primary'>Got it!</button>
          </menu>
        </form>
      </dialog>
    </div>
  );
}

export default KanbanTaskInfo;
