import express from "express";
import { home, getUpload, postUpload, searchMovie } from "../movieController";
const rootRouter = express.Router();

// Add your magic here!
rootRouter.get("/", home);
rootRouter.route("/upload").get(getUpload).post(postUpload);
rootRouter.get("/search", searchMovie);

export default rootRouter;
