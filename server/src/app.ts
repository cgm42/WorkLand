require("dotenv").config();
import express, { Application, Request, Response, NextFunction } from "express";
import passport from "passport";
import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth";
import projectsRouter from "./routes/projects";
import usersProjectsRouter from "./routes/users_projects";
import tasksRouter from "./routes/tasks";
import usersTasksRouter from "./routes/users_tasks";
import meetingsRouter from "./routes/meetings";
import usersMeetingsRouter from "./routes/users_meetings";
import messagesRouter from "./routes/messages";
import usersRouter from "./routes/users";
import { getPersonByGitHub } from "./models/person";
import { socketServer } from "./socketServer";
const cors = require("cors");
const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
const passportSetup = require("./config/");
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY!],
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/projects", projectsRouter);
app.use("/users_projects", usersProjectsRouter);
app.use("/tasks", tasksRouter);
app.use("/users_tasks", usersTasksRouter);
app.use("/meetings", meetingsRouter);
app.use("/users_meetings", usersMeetingsRouter);
app.use("/messages", messagesRouter);
app.use("/users", usersRouter);

const authCheck = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated",
    });
  } else {
    next();
  }
};

app.get("/", authCheck, (req: Request, res: Response) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies,
  });
});


app.get("/logout", (req: Request, res: Response) => {
  req.logOut();
  res.redirect("/login");
});

app.get("/user", (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    const reqUser = req.user as any;
    getPersonByGitHub(reqUser.oauth_id).then((data) => {
      console.log("user authenticated");
      res.status(200).send(data.rows[0]);
    });
    return;
  }
  console.log("Not logged in or not authenticated");
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}🏃`);
});

socketServer.listen(5080);
