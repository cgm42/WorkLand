# Welcome to WorkLand

## About

WorkLand is a metaverse for tech teams. Team members can gather in WorkLand, manage projects, track tasks and get work done. WorkLand also features a break room.

- [Motivation](#motivation)
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Known Issues](#known-issues)
- [Credits](#credits)

<img src="./docs/client-testimony.png" alt='client testiomony' width='900'>

## Motivation

WorkLand is made by three developers, [Johnny](https://github.com/jlabedzki), [Jose](https://github.com/Josebautista10) and [Carrie](https://github.com/cgm42/) as a coding bootcamp demo project. As a remote team, we wanted to create something fun that fosters connectivity and boosts productivity at the same time.  

## Demo

Deployed on Netlify: [WorkLand](https://workland.netlify.app/).
Server hosted on Heroku.
Browser needs to support 3rd party cookies.

## Features

<!-- ![workspace-halloween](./docs/workspace-preview.gif) -->

### **Instruction**

<img src="./docs/instruction.png" alt='instruction' width='900'>

### MMORPG-like Environment

<img src="./docs/demo-day-screenshot.png" alt='demo day screenshot' width='900'>

### **Live GIF Chat**

<img src="./docs/GIF-Messaging.gif" alt='GIF Messaging' width='900'>

### **Work Area**

<img src="./docs/feature-wall.gif" alt='feature-wall' width='900'>

### Project Management

<img src="./docs/project-dashboard.png" alt='project-dashboard' width='900'>
<img src="./docs/edit-project.png" alt='editing a project' width='900'>

### Task Management

<img src="./docs/edit-task.gif" alt='editing a task' width='900'>
<img src="./docs/task-edit.gif" alt=`editing a task's priority` width='900'>

### Kanban board

<img src="./docs/kanban.gif" alt='kanban board' width='900'>

### **Break Room**

### 3D Globe

Shows location based on IP address of WorkLanders

<img src="https://media4.giphy.com/media/tt1qOeBCv0NiK5wLTl/giphy.gif?cid=790b76111a64cd1c31612949ca0f55a35de95ced64037c24&rid=giphy.gif&ct=g" alt='3d globe' width='900'>

### Guitar - thanks to [React-Guitar](https://github.com/4lejandrito/react-guitar)

https://user-images.githubusercontent.com/38818956/141935520-d8b9106a-c0f9-4638-87db-ac30aa3df914.mov

### Piano

<img src="https://media2.giphy.com/media/wrvNEKidC9GNejwidr/giphy.gif?cid=790b76116f316d4f98993962ea578bed491e3e24c38c8821&rid=giphy.gif&ct=g" alt='piano' width='900'>

### Aracade Machine

<img src="https://media0.giphy.com/media/4JlY1JLsENhfyEYgAD/giphy.gif?cid=790b761185b6c331b39ddead37d02cee011f0a236ce35cb7&rid=giphy.gif&ct=g" alt='piano' width='900'>

## Tech Stack

- Built using JavaScript, React, Redux(RTK)
- Back end used TypeScript, Node, Express, OAuth, passport, CORS
- Socket.io used for multiplayer movement and Snapchat-styled instant GIF messaging
- NES.CSS and RPGUI used for retro game styling
- React-beautiful-DND used for drag and drop on the Kanban page

### Database

- PostgreSQL

## Installation

Clone the repository with git:

```shell
git clone git@github.com:cgm42/WorkLand.git
```

Install dependencies in the client folder with [npm](https://npmjs.com):

```shell
npm workland
```

Install dependencies in the server folder:

```shell
npm i
```

## Known Issues

A small number of users seem to experience log in issues sometimes - refer to Issue #60

## Credits

### Pixel Art
Character sprites coursty of [Drew Conley](https://codepen.io/punkydrewster713), used under MIT license. 
Licensed interior and office assets purchased from [itch.io](https://limezu.itch.io/).

### Tutorials
To be updated. 

### Inspirations
Inspired by [WorkAdventure](https://github.com/thecodingmachine/workadventure) and Gather. 
