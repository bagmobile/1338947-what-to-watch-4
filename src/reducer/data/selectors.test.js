import {getFavoriteMovies, getMovieById, getMoviesGenres, getMoviesList, getPromoMovie} from "./selectors.js";
import {DEFAULT_GENRE} from "../../consts.js";
import {testStore} from "../../mocks/store";
import {mockMovies} from "../../mocks/movies";
import {isFetchingMovies, isFetchingPromoMovie} from "./selectors";

describe(`Simple Selectors will return a value from state`, () => {

  it(`getMoviesList will return movies from state`, () => {
    expect(getMoviesList(testStore)).toEqual(mockMovies);
  });

  it(`getPromoMovie will return movies from state`, () => {
    expect(getPromoMovie(testStore)).toEqual(mockMovies[0]);
  });

  it(`getFavoriteMovies will return a value from state`, () => {
    expect(getFavoriteMovies(testStore)).toEqual(mockMovies);
  });

  it(`getMovieById will return a movie with MOCK_ID`, () => {
    expect(getMovieById(testStore, 1)).toEqual(mockMovies[0]);
  });

});

describe(`isFetching group status will return status`, () => {

  it(`isFetching movies return false`, () => {
    expect(isFetchingMovies(testStore)).toEqual(false);
  });

  it(`isFetching promo movie return false`, () => {
    expect(isFetchingPromoMovie(testStore)).toEqual(false);
  });

});


describe(`getMoviesGenres will return`, () => {

  it(`an array with DEFAULT_GENRE and unique genres`, () => {
    expect(getMoviesGenres(testStore)).toHaveLength(4);
  });

  it(`getMoviesGenres return array with only DEFAULT_GENRE when movies is empty`, () => {
    expect(getMoviesGenres({DATA: {movies: []}})).toEqual([DEFAULT_GENRE]);
  });

});


