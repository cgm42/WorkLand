import { query, Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/task";

async function getAllTasksForProject(req: Request, res: Response) {
  const project_id = 1;

  const queryResult = await model.getAllTasksForProject(project_id);
  res.send(queryResult.rows.map((row: String) => camelcaseKeys(row)));
};

async function createTask(req: Request, res: Response) {
  const task = {
    project_id: 1,
    sprint_id: null,
    name: 'style login button',
    description: 'Make the button look better then what its like now',
    start_date: '2021-10-23',
    end_date: '2021-10-23',
    priority_level: 'low'
  }
  
  const queryResult = await model.createTask(task)
  res.send(camelcaseKeys(queryResult.rows[0]))
}

async function editTask(req: Request, res: Response) {
  const task_id = parseInt(req.params.id);

  const task = {
    id: task_id,
    name: 'Style Login Button',
    description: '',
    start_date: '2021-10-24',
    end_date: '2021-10-24'
  };

  const queryResult = await model.editTask(task);
  res.send(camelcaseKeys(queryResult.rows[0]))
};

async function deleteTask(req: Request, res: Response) {
  const task_id = parseInt(req.params.id);

  const queryResult = await model.deleteTask(task_id);
  res.send(camelcaseKeys(queryResult.rows[0]))
};

export {getAllTasksForProject, createTask, editTask, deleteTask};