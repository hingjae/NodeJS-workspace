import express from "express";
import { addMovie } from "./db";
import { home, movieDetail, getUpload, postUpload } from "./movieController";

const movieRouter = express.Router();

// create the '/' route
// create the /:id route
// create the /add route (GET + POST)

movieRouter.get("/", home);
movieRouter.route("/:id(\\d+)").get(movieDetail);
movieRouter.route("/add").get(getUpload).post(postUpload);

export default movieRouter;
