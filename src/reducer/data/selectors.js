import NameSpace from "../name-space";
import {DEFAULT_GENRE, MAX_GENRES_LIST_SIZE} from "../../consts";

export const getMoviesList = (state) => state[NameSpace.DATA].movies;

export const getMovieById = (state, id) => getMoviesList(state).filter((movie) => movie.id === id).shift();

export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;

export const getFavoriteMovies = (state) => state[NameSpace.DATA].favoriteMovies;

export const getMoviesGenres = (state) => [...state[NameSpace.DATA].movies.reduce((acc, movie) => {
  acc.add(movie.genre);
  return acc;
}, new Set([DEFAULT_GENRE]))].slice(0, MAX_GENRES_LIST_SIZE);

export const getReviews = (state) => state[NameSpace.DATA].reviews;
