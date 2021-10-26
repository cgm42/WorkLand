import { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/project";
import * as user_project_model from "../models/user_project";

async function getProjects(req: Request, res: Response) {
  const user = req.user as any;

  const queryResult = await model.getAllProjects(user.id);
  res.send(queryResult.rows.map((row: String) => camelcaseKeys(row)));
};

async function getProject(req: Request, res: Response) {
  const project_id = parseInt(req.params.id);
  const queryResult = await model.getProjectByID(project_id);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

async function addProject(req: Request, res: Response) {
  const {creatorID, name, description, startDate, endDate} = req.body;

  console.log(req.body.users);

  const project = {
    creator_id: creatorID,
    name,
    description,
    start_date: startDate,
    end_date: endDate,
    background_img: ''
  }

  const queryResult = await model.addProject(project)

  for (const user of req.body.users) {
    const userProject = {
      user_id: user,
      project_id: queryResult.rows[0].id,
      role: ""
    }

    user_project_model.addUserToProject(userProject);
  }

  const userProject = {
    user_id: creatorID,
    project_id: queryResult.rows[0].id,
    role: "Project Manager"
  }
  user_project_model.addUserToProject(userProject)
  res.send(camelcaseKeys(queryResult.rows[0]))
};

async function editProject(req: Request, res: Response) {
  // const project = req.body
  const project = {
    id: parseInt(req.params.id), 
    creator_id: 3,
    name: 'Put-it-on-a-tee',
    description: 'Custom tshirt website for client',
    start_date: '2021-04-18',
    end_date: '2021-06-12',
    background_img: ''
  }

  const queryResult = await model.editProject(project);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

async function deleteProject(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  const queryResult = await model.deleteProject(id);
  res.send(camelcaseKeys(queryResult.rows[0]))
};

export { getProjects, getProject, addProject, editProject, deleteProject };
