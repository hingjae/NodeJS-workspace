import "./db";
import "./models/Movie";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import rootRouter from "./routers/rootRouter";
import movieRouter from "./routers/movieRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/movies", movieRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`✅  Server Ready!`));
