import { query, Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/task";

async function getAllTasksForProject(req: Request, res: Response) {
  const project_id = parseInt(req.params.id);

  const queryResult = await model.getAllTasksForProject(project_id);
  res.send(queryResult.rows.map((row: String) => camelcaseKeys(row)));
};

async function createTask(req: Request, res: Response) {
  console.log(req.body);
  const {project_id, sprint_id, name, description, startDate, endDate, users} = req.body;

  const task = {
    project_id,
    sprint_id,
    name,
    description,
    start_date: startDate,
    end_date: endDate,
    priority_level: 0
  }
  
  const queryResult = await model.createTask(task);
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