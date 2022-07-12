import express from "express";
import { detail, getEdit, postEdit, deleteMovie } from "../movieController";
const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/:id([0-9a-f]{24})", detail);
movieRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
movieRouter.get("/:id([0-9a-f]{24})/delete", deleteMovie);
export default movieRouter;
