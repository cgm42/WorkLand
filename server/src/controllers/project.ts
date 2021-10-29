import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/project";
import * as user_project_model from "../models/user_project";

async function getProjects(req: Request, res: Response) {
  const user = req.user as any;

  const queryResult = await model.getAllProjects(user.id);
  res.send(queryResult.rows.map((row: String) => camelcaseKeys(row)));
}

async function getProject(req: Request, res: Response) {
  const project_id = parseInt(req.params.id);
  const queryResult = await model.getProjectByID(project_id);
  res.send(camelcaseKeys(queryResult.rows[0]));
}

async function addProject(req: Request, res: Response) {
  const { creatorID, name, description, startDate, endDate } = req.body;

  const project = {
    creator_id: creatorID,
    name,
    description,
    start_date: startDate,
    end_date: endDate,
    background_img: "",
  };

  const queryResult = await model.addProject(project);

  for (const user of req.body.users) {
    const userProject = {
      user_id: user,
      project_id: queryResult.rows[0].id,
      role: "",
    };

    user_project_model.addUserToProject(userProject);
  }

  const userProject = {
    user_id: creatorID,
    project_id: queryResult.rows[0].id,
    role: "Project Manager",
  };
  user_project_model.addUserToProject(userProject);
  res.send(camelcaseKeys(queryResult.rows[0]));
}

async function editProject(req: Request, res: Response) {
  const project_id = parseInt(req.params.id);
  const users = req.body.users;
  const selectedUsers = req.body.selectedUsers;

  const project = {
    id: project_id,
    name: req.body.name,
    description: req.body.description,
    start_date: req.body.startDate,
    end_date: req.body.endDate,
  };

  const queryResult = await model.editProject(project);

  for (const user of users) {
    const userProject = {
      user_id: user,
      project_id,
    };

    user_project_model.deleteUserFromProject(userProject);
  }

  for (const user of selectedUsers) {
    const userProject = {
      user_id: user,
      project_id,
      role: "",
    };

    user_project_model.addUserToProject(userProject);
  }

  res.send(camelcaseKeys(queryResult.rows[0]));
}

async function deleteProject(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  const queryResult = await model.deleteProject(id);
  res.send(camelcaseKeys(queryResult.rows[0]));
}

export { getProjects, getProject, addProject, editProject, deleteProject };
