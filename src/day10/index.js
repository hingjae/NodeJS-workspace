import "./models/Movie";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

// Codesanbox does not need PORT :)
app.listen(4002, () => console.log(`✅  Server Ready!`));
