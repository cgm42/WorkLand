import express from "express";
const router = express.Router();

import * as controller from "../controllers/user_meeting";

router.post('/', controller.addUserToMeeting);

export default router;