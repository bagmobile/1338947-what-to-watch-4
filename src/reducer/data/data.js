import {extend} from "../../utils/util";
import MovieModel from "../../models/movie";
import ReviewModel from "../../models/review";
import {APIPath} from "../../consts";
import {getMovieById} from "./selectors";


export const initialState = {
  movies: [],
  reviews: [],
  promoMovie: null,
  favoriteMovies: []
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  UPDATE_MOVIE: `UPDATE_MOVIE`,
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
  },
  loadFavoriteMovies: (movies) => {
    return {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: movies
    };
  },
  updateMovie: (movie) => {
    return {
      type: ActionType.UPDATE_MOVIE,
      payload: movie
    };
  }
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
      }).catch((err) => {
        throw err;
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
  toggleFavorite: (movieId) => (dispatch, getState, api) => {
    const movie = getMovieById(getState(), movieId);
    const newStatus = Number(!movie.isFavorite);

    return api.post(`${APIPath.FAVORITE}/${movieId}/${newStatus}`)
      .then((response) => {
        dispatch(ActionCreator.updateMovie(MovieModel.parseMovie(response.data)));
      })
      .catch((err) => {
        throw err;
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
    case ActionType.UPDATE_MOVIE:
      const movie = state.movies.find((targetMovie) => targetMovie.id === action.payload.id);
      movie.isFavorite = action.payload.isFavorite;
      const promoMovie = state.promoMovie.id === movie.id ? action.payload : state.promoMovie;
      return extend(state, {
        movies: state.movies,
        promoMovie
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
