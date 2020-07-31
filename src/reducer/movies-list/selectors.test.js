import {
  getActiveGenre,
  getCurrentMovieListSize,
  getFilteredMoviesByGenre,
  getMoviesLike,
  getPartFilteredMoviesByGenre,
  getVisibilityShowMoreButton,
} from "./selectors";
import {mockMovies} from "../../mocks/movies";
import {testStore} from "../../mocks/store";
import {DEFAULT_GENRE, DEFAULT_MOVIE_LIST_SIZE} from "../../consts";
import NameSpace from "../name-space";


describe(`Simple Selectors will return a value from state`, () => {

  it(`getCurrentMovieListSize will return movies list size from state`, () => {
    expect(getCurrentMovieListSize(testStore)).toEqual(DEFAULT_MOVIE_LIST_SIZE);
  });

  it(`getActiveGenre will return active genre from state`, () => {
    expect(getActiveGenre(testStore)).toEqual(DEFAULT_GENRE);
  });
});

describe(`Get filter movies by genre will return`, () => {

  it(`getMoviesLike will return an array with genre from active movie`, () => {
    expect(getMoviesLike(testStore, mockMovies[2])).toEqual([]);
  });

  it(`getMoviesLike will return an array with genre from active movie not empty`, () => {
    expect(getMoviesLike(testStore, mockMovies[0])).toEqual([mockMovies[1]]);
  });
});

describe(`Check selectors by filter movies`, () => {

  it(`getFilteredMoviesByGenre will return an array with genre from active movie not empty`, () => {
    expect(getFilteredMoviesByGenre(testStore)).toEqual(mockMovies);
  });

  it(`getPartFilteredMoviesByGenre will return an array with genre from active movie not empty`, () => {
    testStore[NameSpace.MOVIES_LIST].currentMovieListSize = 3;
    expect(getPartFilteredMoviesByGenre(testStore)).toEqual(mockMovies.slice(0, 3));
  });

  it(`getVisibilityShowMoreButton will return boolean`, () => {
    expect(getVisibilityShowMoreButton(testStore)).toEqual(false);
  });

});
