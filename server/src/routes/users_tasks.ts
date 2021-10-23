import express from "express";
const router = express.Router();

import * as controller from "../controllers/user_task";

router.post('/', controller.addUserToTask);
router.delete('/', controller.deleteUserFromTask);

export default router;