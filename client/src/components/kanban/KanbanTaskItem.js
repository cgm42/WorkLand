import React, { useState } from 'react';
import { AiFillWarning } from 'react-icons/ai';
import TaskUser from '../users/TaskUser';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import KanbanTaskInfo from './KanbanTaskInfo';

function KanbanTaskItem(props) {
  const {
    index,
    id,
    title,
    description,
    priority,
    currentStatus,
    users,
    taskTeams
  } = props;

  const priorityClass = classNames(
    'priority-icon',
    { low: priority === 0 },
    { medium: priority === 1 },
    { high: priority === 2 }
  );

  const team = taskTeams.filter((team) => {
    return team.taskId === id;
  });

  const usersList = [];

  for (const member of team) {
    for (const user of users) {
      if (user.id === member.userId) {
        usersList.push(user);
      }
    }
  }

  const usersListArray = usersList.map((user) => {
    const { id, name, avatar } = user;
    return <TaskUser key={id} id={id} avatar={avatar} name={name} />;
  });

  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided) => (
        <div
          className='task-item-container'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='task-item-header'>
            <div className='task-users'>{usersListArray}</div>
            <div className={priorityClass}>
              <AiFillWarning></AiFillWarning>
            </div>
          </div>
          <div className='task-title'>
            <h1>{title}</h1>
          </div>
          <div className='dialog-button'>
            <KanbanTaskInfo
              title={title}
              description={description}
            ></KanbanTaskInfo>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default KanbanTaskItem;
