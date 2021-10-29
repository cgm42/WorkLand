import express from "express";
const router = express.Router();

import * as controller from "../controllers/user_task";

router.get("/", controller.getAllUsersAndTasks);

export default router;
