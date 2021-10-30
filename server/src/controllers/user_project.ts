import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/user_project";

async function getAllUsersAndProjects(req: Request, res: Response) {
  const queryResult = await model.getAllUsersAndProjects();
  res.send(queryResult.rows.map((row) => camelcaseKeys(row)));
}

export { getAllUsersAndProjects };
