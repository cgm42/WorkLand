import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/meeting";

async function getAMeetings