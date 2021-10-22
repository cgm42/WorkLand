import express from "express";
const router = express.Router();

import * as controller from "../controllers/user_project";

router.post('/:id', controller.addUserToProject)
router.delete('/:id', controller.deleteUserFromProject);

export default router;