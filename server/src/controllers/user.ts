import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/user";

async function getAllUsers(req: Request, res: Response) {
  const queryResult = await model.getAllUsers();
  res.send(queryResult.rows.map((row) => camelcaseKeys(row)));
};

async function getUsersByProjectID(req: Request, res: Response) {
  const project_id = parseInt(req.params.projectID);

  const queryResult = await model.getUsersByProjectID(project_id)
  res.send(queryResult.rows.map((row) => camelcaseKeys(row)));
}

export {getAllUsers, getUsersByProjectID};