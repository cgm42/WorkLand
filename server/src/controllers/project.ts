import express, { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/project";

async function getProject(req: Request, res: Response) {
  const queryResult = await model.getAllProjects();
  res.send(queryResult.rows.map((row) => camelcaseKeys(row)));
}

export { getProject };
