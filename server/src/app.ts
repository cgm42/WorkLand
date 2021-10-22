require("dotenv").config();
import express, { Application, Request, Response, NextFunction } from "express";
import passport from "passport";
import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import projectRouter from "./routes/project";
import authRouter from "./routes/auth";
import { getPersonByGitHub } from "./models/person";
const app: Application = express();
const port = process.env.PORT || 5000;

const passportSetup = require("./config");

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY!],
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/project", projectRouter);

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
  res.redirect("/");
});

app.get("/user", (req: any, res: Response) => {
  if (req.isAuthenticated()) {
    getPersonByGitHub(req.user.oauth_id).then((data) => {
      res.status(200).send(data.rows[0]);
    });
    return;
  }
  console.log("NOT AUTHENTICATED!");
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}🏃`);
});
