import express from "express";
import passport from "passport";

const router = express.Router();

import * as controller from "../controllers/auth";

router.get("/login/success", controller.loginSuccess);
router.get("/login/failed", controller.loginFail);
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
    successRedirect: process.env.CLIENT_URL,
  })
);

export default router;
