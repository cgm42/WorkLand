import express from "express";
const router = express.Router();

import * as controller from "../controllers/message";

router.get("/direct", controller.getDirectMessages);
router.get("/global", controller.getGlobalMessages);


export default router;