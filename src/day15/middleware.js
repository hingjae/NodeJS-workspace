import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "hingjae";
  next();
};

export const textUpload = multer({
  dest: "uploads/",
  limits: 1000000,
});
