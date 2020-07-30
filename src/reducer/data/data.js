import {extend} from "../../utils/util";
import MovieModel from "../../models/movie";
import ReviewModel from "../../models/review";
import {APIPath} from "../../consts";


export const initialState = {
  movies: [],
  reviews: [],
  promoMovie: null,
  favoriteMovies: [],
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  UPDATE_FAVORITE_STATUS_MOVIE: `UPDATE_FAVORITE_STATUS_MOVIE`,
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
      payload: reviews,
    };
  },
  loadPromoMovie: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMovie,
    };
  },
  loadFavoriteMovies: (movies) => {
    return {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: movies,
    };
  },
  updateFavoriteStatusMovie: (movie) => {
    return {
      type: ActionType.UPDATE_FAVORITE_STATUS_MOVIE,
      payload: movie,
    };
  },
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(APIPath.MOVIES)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(MovieModel.parseMovies(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`${APIPath.REVIEWS}/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(ReviewModel.parseReviews(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`${APIPath.PROMO}`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(MovieModel.parseMovie(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
  loadFavoriteMovies: () => (dispatch, getState, api) => {
    return api.get(`${APIPath.FAVORITE}`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteMovies(MovieModel.parseMovies(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
  toggleFavorite: (movie) => (dispatch, getState, api) => {

    return api.post(`${APIPath.FAVORITE}/${movie.id}/${movie.isFavorite ? 0 : 1}`)
      .then((response) => {
        dispatch(ActionCreator.updateFavoriteStatusMovie(MovieModel.parseMovie(response.data)));
      });
  },
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
    case ActionType.LOAD_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload,
      });
    case ActionType.UPDATE_FAVORITE_STATUS_MOVIE:
      const movies = state.movies.map((movie) =>
        movie.id === action.payload.id
          ? extend(movie, {isFavorite: action.payload.isFavorite}) : movie
      );
      const promoMovie = state.promoMovie.id === action.payload.id ? extend(state.promoMovie, {isFavorite: action.payload.isFavorite}) : state.promoMovie;
      return extend(state, {
        movies,
        promoMovie,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
