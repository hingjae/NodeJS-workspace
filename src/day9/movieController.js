import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const getUpload = (req, res) => {
  return res.render("upload");
};
export const postUpload = (req, res) => {
  const { title, synopsis, genres } = req.body;
  const newMovie = {
    title,
    synopsis,
    genres: genres.split(","),
  };
  addMovie(newMovie);
  return res.redirect("/");
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
