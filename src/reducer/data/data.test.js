import {ActionCreator, ActionType, initialState, Operation, reducer} from "./data";
import {createAPI} from "../../api.js";
import {mockMovies} from "../../mocks/movies";
import MockAdapter from "axios-mock-adapter";
import {PromoMovie} from "../../mocks/promo-movie";
import MovieModel from "../../models/movie";
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
    }, ActionCreator.loadMovies(mockMovies))).toEqual({
      movies: mockMovies,
    });
  });

  it(`Reducer should update movies by load promo movie`, () => {
    expect(reducer({
      promoMovie: null,
    }, ActionCreator.loadPromoMovie(PromoMovie))).toEqual({
      promoMovie: PromoMovie,
    });
  });

  it(`Reducer should update movies by load favorite movies`, () => {
    expect(reducer({
      favoriteMovies: [],
    }, ActionCreator.loadFavoriteMovies(mockMovies))).toEqual({
      favoriteMovies: mockMovies,
    });
  });

  it(`Reducer should update favorite status of movie in movies and promo movie`, () => {
    const promoMovie = mockMovies[1];
    mockMovies[0] = Object.assign({}, mockMovies[2]);

    expect(reducer({
      movies: mockMovies,
      promoMovie,
    }, ActionCreator.updateFavoriteStatusMovie(mockMovies[2]))).toEqual({
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

  it(`Should make a correct API call to /favorite/:id/:status`, function () {
    const movieId = mockMovies[0].id;
    const newStatus = mockMovies[0].isFavorite ? 0 : 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const toggleFavoriteChanger = Operation.toggleFavorite(mockMovies[0]);

    const newMovie = Object.assign({}, mockMovies[0], {isFavorite: true});

    apiMock
      .onPost(`${APIPath.FAVORITE}/${movieId}/${newStatus}`)
      .reply(200, newMovie);

    return toggleFavoriteChanger(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITE_STATUS_MOVIE,
          payload: MovieModel.parseMovie(newMovie),
        });
      });
  });

});
