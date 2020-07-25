import {extend} from "../../utils/util";
import MovieModel from "../../models/movie";
import ReviewModel from "../../models/review";


export const initialState = {
  movies: [],
  reviews: [],
  promoMovie: {}
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_REVIEWS: `LOAD REVIEWS`,
  LOAD_PROMO_MOVIE: `LOAD PROMO MOVIE`
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    };
  },
  loadPromoMovie: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMovie
    };
  }
};

const Operation = {
  loadMovies: (onSuccess) => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(MovieModel.parseMovies(response.data)));
        onSuccess();
      });
  },
  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(ReviewModel.parseReviews(response.data)));
      });
  },
  loadPromoMovie: (onSuccess) => (dispatch, getState, api) => {
    return api.get(`films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(MovieModel.parseMovie(response.data)));
        onSuccess();
      });
  }
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
