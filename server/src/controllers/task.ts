import { query, Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/task";
import * as user_task_model from "../models/user_task";

async function getAllTasksForProject(req: Request, res: Response) {
  const project_id = parseInt(req.params.id);

  const queryResult = await model.getAllTasksForProject(project_id);
  res.send(queryResult.rows.map((row: String) => camelcaseKeys(row)));
}

async function createTask(req: Request, res: Response) {
  const {
    project_id,
    sprint_id,
    name,
    description,
    priority_level,
    startDate,
    endDate,
    users,
  } = req.body;

  const task = {
    project_id,
    sprint_id,
    name,
    description,
    start_date: startDate,
    end_date: endDate,
    priority_level,
  };

  const queryResult = await model.createTask(task);

  for (const user of users) {
    const userTask = {
      user_id: user,
      task_id: queryResult.rows[0].id,
    };

    await user_task_model.addUserToTask(userTask);
  }

  res.send(camelcaseKeys(queryResult.rows[0]));
}

function editTask(req: Request, res: Response) {
  const task_id = parseInt(req.params.id);
  const selectedUsers = req.body.selectedUsers;

  const task = {
    id: task_id,
    name: req.body.name,
    description: req.body.description,
    start_date: req.body.startDate,
    end_date: req.body.endDate,
  };

  model
    .editTask(task)
    .then(async (data) => {
      await user_task_model.deleteUsersFromTask(task_id);
      return data;
    })
    .then(async (data) => {
      for (const user of selectedUsers) {
        const userTask = {
          user_id: user,
          task_id: task_id,
        };

        await user_task_model.addUserToTask(userTask);
      }
      return data;
    })
    .then((data) => {
      res.send(camelcaseKeys(data.rows[0]));
    });
}

async function updateTaskStatus(req: Request, res: Response) {
  const status = req.body.status;
  const id = parseInt(req.params.id);

  const queryResult = await model.updateTaskStatus(status, id);
  res.send(camelcaseKeys(queryResult.rows[0]));
}

async function updateTaskPriority(req: Request, res: Response) {
  const priority = req.body.priority;
  const id = parseInt(req.params.id);

  const queryResult = await model.updateTaskPriority(priority, id);
  res.send(camelcaseKeys(queryResult.rows[0]));
}

async function deleteTask(req: Request, res: Response) {
  const task_id = parseInt(req.params.id);

  const queryResult = await model.deleteTask(task_id);
  res.send(camelcaseKeys(queryResult.rows[0]));
}

export {
  getAllTasksForProject,
  createTask,
  editTask,
  updateTaskStatus,
  updateTaskPriority,
  deleteTask,
};
