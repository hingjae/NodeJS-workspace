import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";

const app = express();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/day8/view");
app.use(express.urlencoded({ extended: true }));
app.use("/", movieRouter);
// Codesanbox does not need PORT :)
app.listen(4002, () => console.log(`✅  Server Ready!`));
