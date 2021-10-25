import express from "express";
const router = express.Router();

import * as controller from "../controllers/user";

router.get("/", controller.getAllUsers);

export default router;