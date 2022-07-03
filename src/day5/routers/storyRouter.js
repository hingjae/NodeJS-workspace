import express from "express";
import { see, edit } from "../controllers/userController";
import Delete from "../controllers/storyController";

export const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", see);
storyRouter.get("/:id(\\d+)/edit", edit);
storyRouter.get("/:id(\\d+)/delete", Delete);
