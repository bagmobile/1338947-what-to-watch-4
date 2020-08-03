import {ActionCreator, ActionType, initialState, reducer} from "./movies-list";
import {DEFAULT_GENRE, DEFAULT_MOVIE_LIST_SIZE} from "../../consts";


describe(`Reducer movies list component`, () => {

  it(`Reducer should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer change genre action`, () => {
    expect(reducer(initialState, ActionCreator.changeGenre(`genre`)))
      .toEqual({
        activeGenre: `genre`,
        currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE
      });
  });

  it(`Reducer change genre action with reset current list size if default genre`, () => {
    expect(reducer({
      activeGenre: `genre`,
      currentMovieListSize: 100
    }, ActionCreator.changeGenre(DEFAULT_GENRE)))
      .toEqual({
        activeGenre: DEFAULT_GENRE,
        currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE
      });
  });

  it(`Reducer show more action`, () => {
    expect(reducer(initialState, ActionCreator.showMoreMovies()))
      .toEqual({
        activeGenre: DEFAULT_GENRE,
        currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE + DEFAULT_MOVIE_LIST_SIZE
      });
  });


});

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator change genre with param`, () => {
    expect(ActionCreator.changeGenre(`genre`))
      .toEqual({
        type: ActionType.CHANGE_GENRE,
        payload: {activeGenre: `genre`, currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE}
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
