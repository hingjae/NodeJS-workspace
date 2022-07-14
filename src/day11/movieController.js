/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = async (req, res) => {
  const movies = await Movie.find({});
  return res.render("home", { pageTitle: "home", movies });
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = async (req, res) => {
  const { title, summary, year, rating, genres } = req.body;
  await Movie.create({
    title,
    summary,
    year,
    rating,
    genres: Movie.formatGenres(genres),
  });
  return res.redirect("/");
};
export const detail = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  return res.render("detail", { pageTitle: "Movie Info", movie });
};
export const getEdit = (req, res) => {
  return res.render("edit", { pageTitle: "Edit" });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, summary, year, rating, genres } = req.body;
  await Movie.findByIdAndUpdate(id, {
    title,
    summary,
    year,
    rating,
    genres: Movie.formatGenres(genres),
  });
  return res.redirect(`/movies/${id}`);
};
export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  await Movie.findByIdAndRemove(id);
  return res.redirect("/");
};

export const searchMovie = async (req, res) => {
  const { keyword } = req.query;
  let movies = [];
  if (keyword) {
    movies = await Movie.find({
      title: {
        $regex: new RegExp(`${keyword}$`, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: "Search", movies });
};
