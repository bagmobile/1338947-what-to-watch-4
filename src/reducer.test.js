import {ActionCreator, initialState, reducer} from "./reducer.js";
import movies, {DEFAULT_GENRE, genres} from "./mocks/movies";
import {PromoMovie} from "./mocks/promo-movie";
import {ActionType} from "./reducer";

describe(`Reducer component`, () => {

  it(`Reducer should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer change genre action`, () => {
    expect(reducer(initialState, ActionCreator.changeGenre(`genre`)))
      .toEqual({
        movies,
        activeMovie: null,
        promoMovie: PromoMovie,
        activeGenre: `genre`
      });
  });

  it(`Reducer filter movies action default`, () => {
    expect(reducer({
      movies: [],
      activeMovie: null,
      activeGenre: DEFAULT_GENRE,
      promoMovie: PromoMovie
    }, ActionCreator.filterMovies(DEFAULT_GENRE)))
      .toEqual(initialState);
  });

  it(`Reducer filter movies action by genre`, () => {
    const resultMovies = [movies[0], movies[2]];
    expect(reducer({movies}, ActionCreator.filterMovies(genres[1])))
      .toEqual({
        movies: resultMovies
      });
  });

  it(`Reducer filter movies action by genre without itself`, () => {
    const resultMovies = [movies[2]];
    expect(reducer({movies}, ActionCreator.filterMovies(genres[1], movies[0])))
      .toEqual({
        movies: resultMovies
      });
  });

  it(`Reducer select movie action by default`, () => {
    expect(reducer({activeMovie: movies[0]}, ActionCreator.selectMovie()))
      .toEqual({activeMovie: null});
  });

  it(`Reducer select movie action`, () => {
    expect(reducer({activeMovie: null}, ActionCreator.selectMovie(movies[0])))
      .toEqual({activeMovie: movies[0]});
  });

});

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator change genre by default`, () => {
    expect(ActionCreator.changeGenre())
      .toEqual({
        type: ActionType.CHANGE_GENRE,
        payload: DEFAULT_GENRE
      });
  });

  it(`ActionCreator change genre with param`, () => {
    expect(ActionCreator.changeGenre(genres[1]))
      .toEqual({
        type: ActionType.CHANGE_GENRE,
        payload: genres[1]
      });
  });

  it(`ActionCreator filter movies by genre`, () => {
    const resultMovies = [movies[0], movies[2]];
    expect(ActionCreator.filterMovies(genres[1]))
      .toEqual({
        type: ActionType.FILTER_MOVIES,
        payload: resultMovies
      });
  });

  it(`ActionCreator filter movies by genre and delete itself `, () => {
    const resultMovies = [movies[2]];
    expect(ActionCreator.filterMovies(genres[1], movies[0]))
      .toEqual({
        type: ActionType.FILTER_MOVIES,
        payload: resultMovies
      });
  });

  it(`ActionCreator select movie action by default`, () => {
    expect(ActionCreator.selectMovie())
      .toEqual({
        type: ActionType.SELECT_MOVIE,
        payload: null
      });
  });

  it(`ActionCreator select movie action`, () => {
    expect(ActionCreator.selectMovie(movies[0]))
      .toEqual({
        type: ActionType.SELECT_MOVIE,
        payload: movies[0]
      });
  });

});


