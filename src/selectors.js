const DEFAULT_MOVIE_LIST_SIZE = 8;
const MOVIE_LIST_BY_GENRE_SIZE = 4;
const MAX_GENRES_LIST_SIZE = 9;
export const DEFAULT_GENRE = `All genres`;

export const getMoviesList = (state) => state.movies;

export const getMovieById = (state, id) => getMoviesList(state).filter((movie) => movie.id === id).shift();

export const getPromoMovie = (state) => state.promoMovie;

export const getActiveGenre = (state) => state.activeGenre;

export const getMoviesGenres = (state) => [...state.movies.reduce((acc, movie) => {
  acc.add(movie.genre);
  return acc;
}, new Set([DEFAULT_GENRE]))].slice(0, MAX_GENRES_LIST_SIZE);

export const getMoviesLike = (state, activeMovie, size = MOVIE_LIST_BY_GENRE_SIZE) => state.movies
  .filter((movie) => movie.genre === activeMovie.genre)
  .filter((movie) => movie.id !== activeMovie.id)
  .slice(0, size);

export const getFilteredMoviesByGenre = (state, size = DEFAULT_MOVIE_LIST_SIZE) => state.movies
  .filter((movie) => state.activeGenre === DEFAULT_GENRE ? true : movie.genre === state.activeGenre)
  .slice(0, size);


