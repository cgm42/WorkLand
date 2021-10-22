import express, { Request, Response } from "express";
import camelcaseKeys from "camelcase-keys";

import * as model from "../models/project";

async function getProjects(req: Request, res: Response) {
  const user_id = 7
  const queryResult = await model.getAllProjects(user_id);
  res.send(queryResult.rows.map((row: String) => camelcaseKeys(row)));
};

async function getProject(req: Request, res: Response) {
  const project_id = parseInt(req.params.id);
  const queryResult = await model.getProjectByID(project_id);
  res.send(camelcaseKeys(queryResult.rows[0]));
};

async function addProject(req: Request, res: Response) {
  // const project = req.body
  const project = {
    creator_id: 3,
    name: 'Put-it-on-a-tee',
    description: 'Custom tshirt website for client',
    start_date: '2021-04-18',
    end_date: '2021-06-12',
    background_img: ''
  }

  const queryResult = await model.addProject(project)
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
