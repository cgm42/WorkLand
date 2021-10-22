import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/user_project";

async function addUserToProject(req: Request, res: Response) {
  const user_id = 5;
  const project_id = parseInt(req.params.id);
  const role = "";

  const queryResult = await model.addUserToProject(user_id, project_id, role);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

async function deleteUserFromProject(req: Request, res: Response) {
  const project_id = parseInt(req.params.id);
  const user_id = 5;

  const queryResult = await model.deleteUserFromProject(user_id, project_id);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

export {addUserToProject, deleteUserFromProject};