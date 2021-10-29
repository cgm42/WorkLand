import express from "express";
const router = express.Router();

import * as controller from "../controllers/user_project";

router.get("/", controller.getAllUsersAndProjects);

export default router;
