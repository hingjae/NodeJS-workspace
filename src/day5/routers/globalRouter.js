import express from "express";
import {
  home,
  trending,
  New,
  join,
  login,
} from "../controllers/homeController";

export const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", New);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
