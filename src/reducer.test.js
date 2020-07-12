import {ActionCreator, initialState, reducer} from "./reducer.js";
import movies, {genres} from "./mocks/movies";
import {PromoMovie} from "./mocks/promo-movie";
import {ActionType} from "./reducer";
import {DEFAULT_GENRE, DEFAULT_MOVIE_LIST_SIZE} from "./selectors";

describe(`Reducer component`, () => {

  it(`Reducer should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer change genre action`, () => {
    expect(reducer(initialState, ActionCreator.changeGenre(`genre`)))
      .toEqual({
        movies,
        promoMovie: PromoMovie,
        activeGenre: `genre`,
        currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE
      });
  });

  it(`Reducer show more action`, () => {
    expect(reducer(initialState, ActionCreator.showMoreMovies()))
      .toEqual({
        movies,
        promoMovie: PromoMovie,
        activeGenre: DEFAULT_GENRE,
        currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE + DEFAULT_MOVIE_LIST_SIZE
      });
  });

});

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator change genre with param`, () => {
    expect(ActionCreator.changeGenre(genres[1]))
      .toEqual({
        type: ActionType.CHANGE_GENRE,
        payload: genres[1]
      });
  });

  it(`ActionCreator show more with param`, () => {
    expect(ActionCreator.showMoreMovies())
      .toEqual({
        type: ActionType.SHOW_MORE_MOVIES,
        payload: DEFAULT_MOVIE_LIST_SIZE
      });
  });

});


