import movies, {DEFAULT_GENRE} from "./mocks/movies";
import {extend} from "./utils/util";
import {PromoMovie} from "./mocks/promo-movie";

const initialState = {
  movies,
  activeMovie: null,
  promoMovie: PromoMovie,
  activeGenre: DEFAULT_GENRE
};

const ActionType = {
  CHANGE_GENRE: `CHANGE GENRE`,
  FILTER_MOVIES: `FILTER MOVIES`,
  SELECT_MOVIE: `SELECT MOVIE`
};

const filterMoviesByGenre = (genre, removedMovie) => {
  if (genre === DEFAULT_GENRE) {
    return movies;
  }
  return movies.filter((movie) => {
    if (removedMovie && (removedMovie === movie)) {
      return false;
    }
    return movie.genre === genre;
  });
};

const ActionCreator = {
  changeGenre: (activeGenre = DEFAULT_GENRE) => ({
    type: ActionType.CHANGE_GENRE,
    payload: activeGenre
  }),
  filterMovies: (activeGenre, removeMovie = null) => ({
    type: ActionType.FILTER_MOVIES,
    payload: filterMoviesByGenre(activeGenre, removeMovie)
  }),
  selectMovie: (activeMovie = null) => ({
    type: ActionType.SELECT_MOVIE,
    payload: activeMovie
  })
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});
    case ActionType.FILTER_MOVIES:
      return extend(state, {movies: action.payload});
    case ActionType.SELECT_MOVIE:
      return extend(state, {activeMovie: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
