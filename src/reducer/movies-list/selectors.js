import {createSelector} from "reselect";
import NameSpace from "../name-space";
import {DEFAULT_GENRE, DEFAULT_MOVIE_LIST_SIZE, MOVIE_LIST_BY_GENRE_SIZE} from "../../consts";

const getCurrentMovieListSize = (state) => state[NameSpace.MOVIES_LIST].currentMovieListSize;

const getMoviesList = (state) => {
  return state[NameSpace.DATA].movies;
};

export const getActiveGenre = (state) => state[NameSpace.MOVIES_LIST].activeGenre;

export const getMoviesLike = (state, activeMovie, size = MOVIE_LIST_BY_GENRE_SIZE) => state[NameSpace.DATA].movies
  .filter((movie) => movie.genre === activeMovie.genre)
  .filter((movie) => movie.id !== activeMovie.id)
  .slice(0, size);

export const getFilteredMoviesByGenre = createSelector(
    [getMoviesList, getActiveGenre],
    (moviesList, activeGenre) => moviesList.filter((movie) => activeGenre === DEFAULT_GENRE
    || movie.genre === activeGenre
    ));

export const getPartFilteredMoviesByGenre = createSelector(
    [getFilteredMoviesByGenre, getCurrentMovieListSize],
    (moviesByGenre, listSize) => moviesByGenre.slice(0, listSize)
);

export const getVisibilityShowMoreButton = createSelector(
    [getFilteredMoviesByGenre, getCurrentMovieListSize],
    (moviesByGenre, listSize) => (moviesByGenre.length >= DEFAULT_MOVIE_LIST_SIZE) && (listSize < moviesByGenre.length)
);
