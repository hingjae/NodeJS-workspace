import express from "express";

const app = express();

const handleListening = () => console.log("Server listening on port 4001🚀");

app.listen(4001, handleListening);
