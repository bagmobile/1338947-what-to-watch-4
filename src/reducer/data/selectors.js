import NameSpace from "../name-space";
import {DEFAULT_GENRE, MAX_GENRES_LIST_SIZE} from "../../consts";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getMoviesList = (state) => state[NAME_SPACE].movies;

export const getReviews = (state) => state[NAME_SPACE].reviews;

export const getPromoMovie = (state) => state[NAME_SPACE].promoMovie;

export const getFavoriteMovies = (state) => state[NAME_SPACE].favoriteMovies;

export const getMovieById = (state, id) => getMoviesList(state).find((movie) => movie.id === id);

export const getMoviesGenres = createSelector(
    getMoviesList,
    (movies) => [...movies.reduce((acc, movie) => {
      acc.add(movie.genre);
      return acc;
    }, new Set([DEFAULT_GENRE]))].slice(0, MAX_GENRES_LIST_SIZE)
);

export const isFetchingMovies = (state) => getMoviesList(state).length === 0;

export const isFetchingPromoMovie = (state) => getPromoMovie(state) === null;
