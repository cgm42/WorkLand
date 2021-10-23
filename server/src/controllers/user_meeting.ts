import { query, Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/user_meeting";

async function addUserToMeeting(req: Request, res: Response) {
  const userMeeting = {
    user_id: 4,
    meeting_id: 1
  };

  const queryResult = await model.addUserToMeeting(userMeeting);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

export {addUserToMeeting};