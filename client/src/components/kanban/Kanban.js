import React, { useState, useEffect } from 'react';
import './kanban.css';
import 'nes.css/css/nes.min.css';
import '../rpgui.css';
import { AiFillWarning } from 'react-icons/ai';
import KanbanCard from './KanbanCard';
function Kanban() {
  return (
    <div className='rpgui-content rpgui-container framed-golden-2'>
      <div className='welcome'>
        <h1>Welcome to your Kanban</h1>
      </div>

      <section className='kanban-layout'>
        <KanbanCard name = {'Late'}></KanbanCard>
        <KanbanCard name = {'Todo'}></KanbanCard>
        <KanbanCard name = {'In Progress'}></KanbanCard>
        <KanbanCard name = {'Done'}></KanbanCard>
      </section>
    </div>
  );
}

export default Kanban;
