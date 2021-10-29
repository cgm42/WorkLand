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

function addProject(req: Request, res: Response) {
  const { creatorID, name, description, startDate, endDate } = req.body;

  const project = {
    creator_id: creatorID,
    name,
    description,
    start_date: startDate,
    end_date: endDate,
    background_img: "",
  };

  model
    .addProject(project)
    .then(async (data) => {
      for (const user of req.body.users) {
        const userProject = {
          user_id: user,
          project_id: data.rows[0].id,
          role: "",
        };

        await user_project_model.addUserToProject(userProject);
      }
      const userProject = {
        user_id: creatorID,
        project_id: data.rows[0].id,
        role: "Project Manager",
      };
      await user_project_model.addUserToProject(userProject);
      return data.rows[0];
    })
    .then((data) => {
      res.send(camelcaseKeys(data));
    });
}

function editProject(req: Request, res: Response) {
  const project_id = parseInt(req.params.id);
  const selectedUsers = req.body.selectedUsers;

  const project = {
    id: project_id,
    name: req.body.name,
    description: req.body.description,
    start_date: req.body.startDate,
    end_date: req.body.endDate,
  };

  model
    .editProject(project)
    .then(async (data) => {
      await user_project_model.deleteUsersFromProject(project_id);
      return data;
    })
    .then(async (data) => {
      for (const user of selectedUsers) {
        const userProject = {
          user_id: user,
          project_id,
          role: "",
        };

        await user_project_model.addUserToProject(userProject);
      }

      res.send(camelcaseKeys(data.rows[0]));
    });
}

async function deleteProject(req: Request, res: Response) {
  const project_id = parseInt(req.params.id);

  const queryResult = await model.deleteProject(project_id);
  res.send(camelcaseKeys(queryResult.rows[0]));
}

export { getProjects, getProject, addProject, editProject, deleteProject };
