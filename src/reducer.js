import movies from "./mocks/movies";
import {extend} from "./utils/util";
import {PromoMovie} from "./mocks/promo-movie";
import {DEFAULT_GENRE, DEFAULT_MOVIE_LIST_SIZE} from "./selectors";

const initialState = {
  movies,
  promoMovie: PromoMovie,
  activeGenre: DEFAULT_GENRE,
  currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE
};

const ActionType = {
  CHANGE_GENRE: `CHANGE GENRE`,
  SHOW_MORE_MOVIES: `SHOW MORE MOVIES`
};

const ActionCreator = {
  changeGenre: (genre = DEFAULT_GENRE) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  showMoreMovies: (currentMovieListSize) => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: currentMovieListSize + DEFAULT_MOVIE_LIST_SIZE
  })
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {currentMovieListSize: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
