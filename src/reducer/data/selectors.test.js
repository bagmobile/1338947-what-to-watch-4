import {
  getFavoriteMovies,
  getMovieById,
  getMoviesGenres,
  getMoviesList,
  getPromoMovie,
  getReviews,
} from "./selectors.js";
import {DEFAULT_GENRE} from "../../consts.js";
import {testStore} from "../../mocks/store";
import {mockMovies} from "../../mocks/movies";
import {mockReviews} from "../../mocks/movie-review";

describe(`Simple Selectors will return a value from state`, () => {

  it(`getMoviesList will return movies from state`, () => {
    expect(getMoviesList(testStore)).toEqual(mockMovies);
  });

  it(`getPromoMovie will return movies from state`, () => {
    expect(getPromoMovie(testStore)).toEqual(mockMovies[0]);
  });

  it(`getReviews will return comments from state`, () => {
    expect(getReviews(testStore)).toEqual(mockReviews);
  });

  it(`getFavoriteMovies will return a value from state`, () => {
    expect(getFavoriteMovies(testStore)).toEqual(testStore.DATA.favoriteMovies);
  });

  it(`getMovieById will return a movie with MOCK_ID`, () => {
    expect(getMovieById(testStore, 1)).toEqual(mockMovies[0]);
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


