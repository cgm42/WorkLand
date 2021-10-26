import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/user_task";

async function getAllUsersAndTasks(req: Request, res: Response) {
  const queryResult = await model.getAllUsersAndTasks();
  res.send(queryResult.rows.map((row) => camelcaseKeys(row)));
}

async function addUserToTask(req: Request, res: Response) {
  const userTask = {
    user_id: 5, //switch to req.body.user_id later
    task_id: 1 //switch to req.body(or req.params?) later
  }

  const queryResult = await model.addUserToTask(userTask);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

async function deleteUserFromTask(req: Request, res: Response) {
  const userTask = {
    user_id: 5, //switch to req.body.user_id later
    task_id: 1 //switch to req.body(or req.params?) later
  }

  const queryResult = await model.deleteUserFromTask(userTask);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

export {getAllUsersAndTasks, addUserToTask, deleteUserFromTask};