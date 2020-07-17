import {DEFAULT_GENRE, DEFAULT_MOVIE_LIST_SIZE} from "../../selectors";
import {extend} from "../../utils/util";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE
};

const ActionType = {
  CHANGE_GENRE: `CHANGE GENRE`,
  SHOW_MORE_MOVIES: `SHOW MORE MOVIES`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  showMoreMovies: () => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: DEFAULT_MOVIE_LIST_SIZE
  })
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        currentMovieListSize: action.payload === DEFAULT_GENRE ? DEFAULT_MOVIE_LIST_SIZE : state.currentMovieListSize
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {currentMovieListSize: state.currentMovieListSize + action.payload});
    case ActionType.SET_CURRENT_MOVIE_LIST_SIZE:
      return extend(state, {currentMovieListSize: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
