import express from "express";
const router = express.Router();

import * as controller from "../controllers/project";

router.get("/", controller.getProjects);
router.get("/:id", controller.getProject);
router.post("/", controller.addProject);
router.patch("/:id", controller.editProject);
router.delete("/:id", controller.deleteProject);

export default router;
