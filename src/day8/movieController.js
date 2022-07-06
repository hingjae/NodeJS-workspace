import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  // console.log(movies);
  return res.render("index", { title: "Movies!", movies });
};
export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  return res.render("info", {
    title: movie.title,
    summary: movie.summary,
    genres: movie.genres,
  });
};
export const filterMovie = (req, res) => {
  const movies = getMovies();
  const { year, rating } = req.query;
  return res.render("filter", { title: "Searching", movies, year, rating });
};
