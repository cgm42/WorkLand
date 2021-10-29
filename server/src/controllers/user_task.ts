import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/user_task";

async function getAllUsersAndTasks(req: Request, res: Response) {
  const queryResult = await model.getAllUsersAndTasks();
  res.send(queryResult.rows.map((row) => camelcaseKeys(row)));
}

export { getAllUsersAndTasks };
