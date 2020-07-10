import movies from "./mocks/movies";
import {extend} from "./utils/util";
import {PromoMovie} from "./mocks/promo-movie";
import {DEFAULT_GENRE} from "./selectors";

const initialState = {
  movies,
  promoMovie: PromoMovie,
  activeGenre: DEFAULT_GENRE
};

const ActionType = {
  CHANGE_GENRE: `CHANGE GENRE`
};

const ActionCreator = {
  changeGenre: (genre = DEFAULT_GENRE) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  })
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
