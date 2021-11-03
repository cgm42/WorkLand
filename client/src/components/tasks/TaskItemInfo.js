import React from 'react'
import { BiShow } from 'react-icons/bi';

function TaskItemInfo(props) {
  const taskItemId = `dialog-dark-${props.id}`

  return (
      <div>
      <BiShow
        type='button'
        className='show-more'
        onClick={() => {
          document.getElementById(taskItemId).showModal();
        }}
      ></BiShow>
      <dialog className='nes-dialog is-dark task-dialog' id={taskItemId}>
        <form method='dialog'>
          <h1>Users:</h1>
          <ul className="list-of-users">{props.users}</ul>
          <menu className='dialog-menu'>
            <button className='nes-btn is-primary'>Got it!</button>
          </menu>
        </form>
      </dialog>
    </div>
  )
}

export default TaskItemInfo
