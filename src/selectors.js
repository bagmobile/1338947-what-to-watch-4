import {createSelector} from "reselect";

export const DEFAULT_MOVIE_LIST_SIZE = 8;
const MOVIE_LIST_BY_GENRE_SIZE = 4;
const MAX_GENRES_LIST_SIZE = 9;
export const DEFAULT_GENRE = `All genres`;

export const getMoviesList = (state) => state.movies;

const getCurrentMovieListSize = (state) => state.currentMovieListSize;

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

export const getFilteredMoviesByGenre = createSelector(
    [getMoviesList, getActiveGenre],
    (moviesList, activeGenre) => moviesList.filter((movie) => activeGenre === DEFAULT_GENRE
      ? true
      : movie.genre === activeGenre)
);

export const getPartFilteredMoviesByGenre = createSelector(
    [getFilteredMoviesByGenre, getCurrentMovieListSize],
    (moviesByGenre, listSize) => moviesByGenre.slice(0, listSize)
);

export const getVisibilityShowMoreButton = createSelector(
    [getFilteredMoviesByGenre, getCurrentMovieListSize],
    (moviesByGenre, listSize) => (moviesByGenre.length >= DEFAULT_MOVIE_LIST_SIZE) && (listSize < moviesByGenre.length)
);


