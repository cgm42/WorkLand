import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/message";

async function getDirectMessages(req: Request, res: Response) {
  const receiver_id = 2;
  
  const queryResult = await model.getDirectMessages(receiver_id);
  res.send(queryResult.rows.map((row: String) => camelcaseKeys(row)));
};

async function getGlobalMessages(req: Request, res: Response) {
  const queryResult = await model.getGlobalMessages();
  res.send(queryResult.rows.map((row: String) => camelcaseKeys(row)));
}

export {getDirectMessages, getGlobalMessages};