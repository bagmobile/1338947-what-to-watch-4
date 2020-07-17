import movies from "../../mocks/movies";
import {PromoMovie} from "../../mocks/promo-movie";

export const initialState = {
  movies,
  promoMovie: PromoMovie
};

const reducer = (state = initialState) => {
  return state;
};

export {reducer};
