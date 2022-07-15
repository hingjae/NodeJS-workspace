export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteTitle = "Nomad Users";
  res.locals.user = req.session.user;
  next();
};
