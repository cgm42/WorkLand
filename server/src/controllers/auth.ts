require("dotenv").config();
import express, { Request, Response } from "express";

function loginSuccess(req: Request, res: Response) {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: (req as any).user,
      cookies: req.cookies,
    });
  }
}

function loginFail(req: Request, res: Response) {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  });
}

export { loginSuccess, loginFail };
