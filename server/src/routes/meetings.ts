import express from "express";
const router = express.Router();

import * as controller from "../controllers/meeting";

router.get("/", controller.getAllMeetingsForUser);
router.post("/", controller.createMeeting);

export default router;