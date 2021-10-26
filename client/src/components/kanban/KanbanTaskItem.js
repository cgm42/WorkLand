import React from 'react'
import { AiFillWarning } from 'react-icons/ai';

function KanbanTaskItem() {
  return (
    <div className='task-item-container'>
      <div className='task-item-header'>
        <h1>title</h1>
        <div className='priority-icon'>
          <AiFillWarning></AiFillWarning>
        </div>
      </div>

      <p>description</p>
      <div className='task-users'>
        <AiFillWarning></AiFillWarning>
        <AiFillWarning></AiFillWarning>
        <AiFillWarning></AiFillWarning>
      </div>
    </div>
  )
}

export default KanbanTaskItem
