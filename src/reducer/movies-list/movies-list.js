import {DEFAULT_GENRE, DEFAULT_MOVIE_LIST_SIZE} from "../../consts";
import {extend} from "../../utils/common";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: {activeGenre: genre, currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE}
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
        activeGenre: action.payload.activeGenre,
        currentMovieListSize: action.payload.currentMovieListSize
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {currentMovieListSize: state.currentMovieListSize + action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
