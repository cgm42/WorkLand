import express from "express";
const router = express.Router();

import * as controller from "../controllers/project";

router.get("/", controller.getProject);

export default router;
