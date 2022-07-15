import express from "express";
import {
  loginCheck,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "./userControllers";
const userRouter = express.Router();

// Add your magic here!

userRouter.get("/", loginCheck);
userRouter.route("/join").get(getJoin).post(postJoin);
userRouter.route("/login").get(getLogin).post(postLogin);

export default userRouter;
