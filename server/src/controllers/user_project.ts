import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/user_project";

async function getAllUsersAndProjects(req: Request, res: Response) {
  const queryResult = await model.getAllUsersAndProjects();
  res.send(queryResult.rows.map((row) => camelcaseKeys(row)));
}

async function addUserToProject(req: Request, res: Response) {
  const userProject = {
    user_id: 5, //switch to req.body.user_id later
    project_id: 1, //switch to req.body.project_id later
    role: "",
  }

  const queryResult = await model.addUserToProject(userProject);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

async function deleteUserFromProject(req: Request, res: Response) {
  const userProject = {
    user_id: 5, //switch to req.body.user_id later
    project_id: 1 //switch to req.body.project_id later
  }

  const queryResult = await model.deleteUserFromProject(userProject);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

export {getAllUsersAndProjects, addUserToProject, deleteUserFromProject};