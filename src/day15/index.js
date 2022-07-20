import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middleware";
import { userRouter } from "./userRouter";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", userRouter);
// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
