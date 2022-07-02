import express from "express";

const PORT = 4001;
const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>Home</h1>");
};

const handleAbout = (req, res) => {
  return res.send("<h1>About</h1>");
};

const handleContact = (req, res) => {
  return res.send("<h1>Contact</h1>");
};

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", (req, res) => res.send("<h1>Login</h1>"));

const handleListening = () =>
  console.log(`✅Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
