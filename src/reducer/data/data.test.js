import {ActionType, initialState, Operation, reducer} from "./data";
import {createAPI} from "../../api.js";
import {mockMovies} from "../../mocks/movies";
import MockAdapter from "axios-mock-adapter";
import {PromoMovie} from "../../mocks/promo-movie";
import MovieModel from "../../models/movie";
import ReviewModel from "../../models/review";
import {mockReviews} from "../../mocks/movie-review";
import {APIPath} from "../../consts";

const api = createAPI(() => {
});

describe(`Reducer data component`, () => {

  it(`Reducer should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update movies by load movies`, () => {
    expect(reducer({
      movies: [],
    }, {
      type: ActionType.LOAD_MOVIES,
      payload: mockMovies,
    })).toEqual({
      movies: mockMovies,
    });
  });

  it(`Reducer should update movies by load reviews`, () => {
    const reviews = mockReviews;
    expect(reducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    })).toEqual({
      reviews,
    });
  });

  it(`Reducer should update movies by load promo movie`, () => {
    expect(reducer({
      promoMovie: null,
    }, {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: PromoMovie,
    })).toEqual({
      promoMovie: PromoMovie,
    });
  });

  it(`Reducer should update movies by load favorite movies`, () => {
    expect(reducer({
      favoriteMovies: [],
    }, {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: mockMovies,
    })).toEqual({
      favoriteMovies: mockMovies,
    });
  });

  it(`Reducer should update movie in movies`, () => {
    const promoMovie = mockMovies[1];
    mockMovies[0] = Object.assign({}, mockMovies[2]);

    expect(reducer({
      movies: mockMovies,
      promoMovie,
    }, {
      type: ActionType.UPDATE_FAVORITE_STATUS_MOVIE,
      payload: mockMovies[2],
    })).toEqual({
      movies: mockMovies,
      promoMovie,
    });
  });

});

describe(`Operation work correctly`, () => {

  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieLoader = Operation.loadMovies(() => {
    });

    apiMock
      .onGet(APIPath.MOVIES)
      .reply(200, mockMovies);

    return movieLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: MovieModel.parseMovies(mockMovies),
        });
      });
  });

  it(`Should make a correct API call to /comments`, function () {
    const movieId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewLoader = Operation.loadReviews(movieId);

    apiMock
      .onGet(`${APIPath.REVIEWS}/${movieId}`)
      .reply(200, mockReviews);

    return reviewLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: ReviewModel.parseReviews(mockReviews),
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = Operation.loadPromoMovie(() => {
    });

    apiMock
      .onGet(APIPath.PROMO)
      .reply(200, mockMovies[0]);

    return promoMovieLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: MovieModel.parseMovie(mockMovies[0]),
        });
      });
  });

  it(`Should make a correct API call to /favorite`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = Operation.loadFavoriteMovies(() => {
    });

    apiMock
      .onGet(APIPath.FAVORITE)
      .reply(200, mockMovies);

    return promoMovieLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_MOVIES,
          payload: MovieModel.parseMovies(mockMovies),
        });
      });
  });

});
