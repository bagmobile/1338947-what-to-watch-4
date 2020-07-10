import {ActionCreator, initialState, reducer} from "./reducer.js";
import movies, {genres} from "./mocks/movies";
import {PromoMovie} from "./mocks/promo-movie";
import {ActionType} from "./reducer";
import {DEFAULT_GENRE} from "./selectors";

describe(`Reducer component`, () => {

  it(`Reducer should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer change genre action`, () => {
    expect(reducer(initialState, ActionCreator.changeGenre(`genre`)))
      .toEqual({
        movies,
        promoMovie: PromoMovie,
        activeGenre: `genre`
      });
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

});


