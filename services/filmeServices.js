//funções banco

const moviesDataBase = require("../startUp");
const shortId = require("shortid");

const createMovie = async (movie) => {
  movie.id = shortId.generate();

  const url = validateURL(movie.cover);
  if (!url) return { status: 400, message: "Url Invalida!!! Insira uma url valida." };

  const newMovie = formatMovies(movie);

  let response = await moviesDataBase.moviesDataBase.create(newMovie);
  return { status: 200, message: response };
};

const searchMovie = async () => {
  const response = await moviesDataBase.moviesDataBase.find();
  return { status: 200, message: response };
};

const updateMovie = (idMovie, movie) => {
  const newMovie = formatMovies(movie);
  const response = moviesDataBase.moviesDataBase.findOneAndUpdate({ id: idMovie }, newMovie);
  return { status: 200, message: response };
};

const deleteMovie = async (id) => {
  let response = await moviesDataBase.moviesDataBase.deleteOne({ id: id });
  return { status: 200, message: response };
};

const formatMovies = (movie) => {
  const newMovie = {};

  if (movie.name) newMovie.name = movie.name;
  if (movie.genre) newMovie.genre = movie.genre;
  if (movie.director) newMovie.director = movie.director;
  if (movie.cover) newMovie.cover = movie.cover;
  return newMovie;
};

const validateURL = (url) => {
  if ("https" === url.substring(0, 5) || "http" === url.substring(0, 4)) {
    return true;
  }
  return false;
};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  searchMovie,
};
