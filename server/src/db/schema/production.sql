INSERT INTO projects (creator_id, name, description, start_date, end_date, background_img)
VALUES
  (null, 'Welcome to WorkLand!', 'This is a project to get new users acquainted with WorkLand!', null, null, '');

INSERT INTO tasks (project_id, sprint_id, name, description, start_date, end_date, priority_level)
VALUES
  (1, null, 'Click on the "Status" column!', 'Clicking on the column toggles the status of your task!', '2021-11-04', '2021-11-05', 0),
  (1, null, 'Click on the "Priority" column!', 'Click on the column toggles the priority of your task!', '2021-11-05', '2021-11-06', 0),
  (1, null, 'Go discover your Kanban Board!', 'The Kanban board is another way to manage your tasks'' status. Simply drag and drop!', '2021-11-06', '2021-11-07', 0),
  (1, null, 'Go discover your Gantt Chart!', 'The Gantt Chart is the best way to view the timeline of your tasks for a proejct.', '2021-11-07', '2021-11-08', 0),
  (1, null, 'Check out your user dashboard!', 'Here you can see relevent information about yourself.', '2021-11-08', '2021-11-09', 0),
  (1, null, 'Send a gif!', 'Click on the "Send A Gif" button to send a gif to an individual or all users!', '2021-11-09', '2021-11-10', 0);