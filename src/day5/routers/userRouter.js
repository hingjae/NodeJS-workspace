import express from "express";
import { users, see, edit } from "../controllers/userController";
export const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/:id(\\d+)", see);
userRouter.get("/edit-profile", edit);
