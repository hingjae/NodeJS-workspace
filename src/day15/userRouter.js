import express from "express";
import { textUpload } from "./middleware";
import { home, postUpload, read } from "./userController";

export const userRouter = express.Router();

userRouter.route("/").get(home).post(textUpload.single("text"), postUpload);
userRouter.route("/read").get(read);
