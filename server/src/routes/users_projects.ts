import express from "express";
const router = express.Router();

import * as controller from "../controllers/user_project";

router.get('/', controller.getAllUsersAndProjects);
router.post('/', controller.addUserToProject)
router.delete('/', controller.deleteUserFromProject);

export default router;