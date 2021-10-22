import express, { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/project";

async function getProjects(req: Request, res: Response) {
  const user_id = 7
  const queryResult = await model.getAllProjects(user_id);
  res.send(queryResult.rows.map((row: String) => camelcaseKeys(row)));
}

export { getProjects };
