import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/meeting";

async function getAllMeetingsForUser(req: Request, res: Response) {
  const user_id = 1;
  
  const queryResult = await model.getAllMeetingsForUser(user_id);
  res.send(queryResult.rows.map((row:String) => camelcaseKeys(row)));
}

async function createMeeting(req: Request, res: Response) {
  const meeting = {
    name: 'google', 
    description:'meet and greet', 
    date: '2021-10-31', 
    start_time: '09:00:00', 
    end_time: '10:00:00'
  }
  
  const queryResult = await model.createMeeting(meeting);
  res.send(camelcaseKeys(queryResult.rows[0]))
};

export {getAllMeetingsForUser, createMeeting};