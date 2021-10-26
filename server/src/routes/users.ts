import express from "express";
const router = express.Router();

import * as controller from "../controllers/user";

router.get("/", controller.getAllUsers);
router.get("/:projectID", controller.getUsersByProjectID)

export default router;