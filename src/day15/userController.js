import fs from "fs";

let textFile;

export const home = (req, res) => {
  return res.render("home", { pageTitle: "home" });
};

export const read = (req, res) => {
  return res.render("read", { pageTitle: "read", textFile });
};

export const postUpload = (req, res) => {
  const { path } = req.file;
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    textFile = data;
    return res.redirect("/read");
  });
};
