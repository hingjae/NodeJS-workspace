import express from "express";

const PORT = 4000;

const app = express();

//middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};

//middleware
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue");
  next();
};

//not middleware
const handleHome = (req, res) => {
  return res.end();
};

//not middleware
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(logger, privateMiddleware); //모든 route에서 middleware를 사용함.!!
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`✅Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
