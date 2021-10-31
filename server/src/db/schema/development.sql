INSERT INTO users(name, avatar)
VALUES
  ('Johnny', 'https://i.imgur.com/31MtvRN.png'),
  ('Carrie', 'https://i.imgur.com/qn5TFDx.png'),
  ('Jose', 'https://i.imgur.com/31MtvRN.png'),
  ('David', 'https://i.imgur.com/31MtvRN.png'),
  ('Amanda', 'https://i.imgur.com/qn5TFDx.png'),
  ('Matthew', 'https://i.imgur.com/31MtvRN.png'),
  ('Lydia Miller-Jones', 'https://i.imgur.com/qn5TFDx.png'),
  ('Archie', 'https://i.imgur.com/31MtvRN.png'),
  ('Justin', 'https://i.imgur.com/31MtvRN.png');

INSERT INTO projects (creator_id, name, description, start_date, end_date, background_img)
VALUES
  (null, 'Workland Walkthrough', 'A project to get new users acquainted with Workland!', null, null, ''),
  (2, 'Final Project', 'Create a tech-focused project management system with an integrated virtual meeting room', '2021-10-21', '2021-11-04', ''),
  (5, 'Refactor legacy code', 'Legacy code test coverage is currently only 20% and we introduce new bugs every time we add features. Let''s change that with a complete refactor.', '2021-03-10', '2022-03-10', ''),
  (1, 'Continued education', 'This purpose of this project is to allocate time blocks for everyone to advance their learning and keep their knowledge up to date', '2022-01-02', '2022-02-01', ''),
  (3, 'Put-it-on-a-tee', 'Ecommerce website for client that sells custom tshirts', '2021-04-18', '2021-06-12', '');

UPDATE projects
SET current_status = 'Complete'
WHERE projects.id = 4;

INSERT INTO users_projects (user_id, project_id, role)
VALUES
  (1, 2, 'Backend Dev'),
  (2, 2, 'Backend Dev'),
  (3, 2, 'Frontend Dev'),
  (7, 2, 'Lead Dev'),
  (4, 3, 'Fullstack Dev'),
  (5, 3, 'QA & Testing'),
  (6, 3, 'Lead Dev'),
  (1, 4, null),
  (2, 4, null),
  (3, 4, null),
  (4, 4, null),
  (5, 4, null),
  (6, 4, null),
  (7, 4, null),
  (8, 4, null),
  (9, 4, null),
  (4, 5, 'Fullstack Dev'),
  (7, 5, 'Lead Dev'),
  (9, 5, 'QA & Testing');


INSERT INTO sprints (project_id, name, description, start_date, end_date)
VALUES
  (1, 'Project skeleton and database setup', '100m dash to get the projects skeleton and database setup before meeting with Andy', '2021-10-21', '2021-10-22'),
  (2, 'Planning and organization', 'Come up with a game plan and make sure all devs are on the same page about what needs to be done', '2021-03-12', '2021-03-19');

UPDATE sprints
SET current_status = 'Complete'
WHERE sprints.id = 2;

INSERT INTO tasks (project_id, sprint_id, name, description, start_date, end_date, priority_level)
VALUES
  (1, null, 'Click on the "Status" column!', 'Clicking on the column toggles the status of your task!', '2021-11-04', '2021-11-05', 0),
  (1, null, 'Click on the "Priority" column!', 'Click on the column toggles the priority of your task!', '2021-11-05', '2021-11-06', 0),
  (1, null, 'Go discover your Kanban Board!', 'The Kanban board is another way to manage your tasks'' status. Simply drag and drop!', '2021-11-06', '2021-11-07', 0),
  (1, null, 'Go discover your Gantt Chart!', 'The Gantt Chart is the best way to view the timeline of your tasks for a proejct.', '2021-11-07', '2021-11-08', 0),
  (1, null, 'Check out your user dashboard!', 'Here you can see relevent information about yourself.', '2021-11-08', '2021-11-09', 0),
  (1, null, 'Send a gif!', 'Click on the "Send A Gif" button to send a gif to an individual or all users!', '2021-11-09', '2021-11-10', 0),
  (1, null, 'Play an instrument', 'Head over to the piano or guitar and have some fun!', '2021-11-10', '2021-11-11', 0),
  (1, null, 'Play some tetris', 'Head over to the arcade machines and play some tetris!', '2021-11-10', '2021-11-11', 0),
  (1, null, 'Check out the world map!', 'Go to the map on the wall to see a 3d globe of where your coworkers are located!', '2021-11-10', '2021-11-11', 0);

INSERT INTO meetings (name, description, date, start_time, end_time)
VALUES
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-22', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-23', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-24', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-25', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-26', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-27', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-28', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-29', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-30', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-10-31', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-11-01', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-11-02', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-11-03', '09:30:00 PST', '10:00:00 PST'),
  ('Daily Standup', 'Discuss your current progress, short-term goals, and any roadblocks/obstacles you''re facing', '2021-11-04', '09:30:00 PST', '10:00:00 PST'),
  ('Demo Practice', 'Present our project as if it was demo day, try to get some of our cohort/mentors to watch', '2021-11-05', '09:00:00 PST', '09:30:00 PST'),
  ('Post Demo Meeting', 'Pat yourself on the back, order a pizza, and drink some beer!', '2021-11-05', '13:00:00 PST', '14:00:00 PST');

INSERT INTO users_meetings (user_id, meeting_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 6),
  (1, 7),
  (1, 8),
  (1, 9),
  (1, 10),
  (1, 11),
  (1, 12),
  (1, 13),
  (1, 14),
  (1, 15),
  (1, 16),
  (2, 1),
  (2, 2),
  (2, 3),
  (2, 4),
  (2, 5),
  (2, 6),
  (2, 7),
  (2, 8),
  (2, 9),
  (2, 10),
  (2, 11),
  (2, 12),
  (2, 13),
  (2, 14),
  (2, 15),
  (2, 16),
  (3, 1),
  (3, 2),
  (3, 3),
  (3, 4),
  (3, 5),
  (3, 6),
  (3, 7),
  (3, 8),
  (3, 9),
  (3, 10),
  (3, 11),
  (3, 12),
  (3, 13),
  (3, 14),
  (3, 15),
  (3, 16),
  (7, 1),
  (7, 2),
  (7, 3),
  (7, 4),
  (7, 5),
  (7, 6),
  (7, 7),
  (7, 8),
  (7, 9),
  (7, 10),
  (7, 11),
  (7, 12),
  (7, 13),
  (7, 14),
  (7, 15),
  (7, 16);

INSERT INTO messages (message, sender_id, receiver_id)
VALUES
  ('Hey there! This is a global message from Johnny!', 1, null),
  ('This is a private message from Jose to Carrie', 3, 2),
  ('This is a private message from Johnny to Jose', 1, 3),
  ('This is a private message from Carrie to Johnny', 2, 1),
  ('This is a another global message from everyone''s favorite developer!', 7, null);