import React, { useState, useEffect } from 'react';
import './kanban.css';
import 'nes.css/css/nes.min.css';
import '../rpgui.css';
import { AiFillWarning } from 'react-icons/ai';
import KanbanTaskItem from './KanbanTaskItem';

function KanbanCard(props) {
  const {name} = props
  return (
    <div className='kanban-card rpgui-container framed float'>
          <header>{name}</header>
          <KanbanTaskItem></KanbanTaskItem>
          <KanbanTaskItem></KanbanTaskItem>
          <KanbanTaskItem></KanbanTaskItem>
          <KanbanTaskItem></KanbanTaskItem>
          <KanbanTaskItem></KanbanTaskItem>
          <KanbanTaskItem></KanbanTaskItem>
    </div>
  );
}

export default KanbanCard;
