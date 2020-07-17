import {DEFAULT_GENRE, MAX_GENRES_LIST_SIZE} from "../../selectors";
import NameSpace from "../name-space";

export const getMoviesList = (state) => state[NameSpace.DATA].movies;

export const getMovieById = (state, id) => getMoviesList(state).filter((movie) => movie.id === id).shift();

export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;

export const getMoviesGenres = (state) => [...state[NameSpace.DATA].movies.reduce((acc, movie) => {
  acc.add(movie.genre);
  return acc;
}, new Set([DEFAULT_GENRE]))].slice(0, MAX_GENRES_LIST_SIZE);
