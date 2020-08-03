import {
  getMessage,
  getReviews,
  isAddReviewFetching,
  isErrorAddReviewFetching,
  isErrorReviewFetching,
  isReviewFetching,
  isSuccessAddReviewsFetching,
  isSuccessReviewsFetching
} from "./selectors";
import {testStore} from "../../mocks/store";
import {mockReviews} from "../../mocks/movie-review";

describe(`Simple Selectors will return a value from state`, () => {


  it(`getReviews will return reviews from state`, () => {
    expect(getReviews(testStore)).toEqual(mockReviews);
  });

  it(`getReviews will return message from state`, () => {
    expect(getMessage(testStore)).toEqual(``);
  });

  it(`getReviews will return fetching review status from state`, () => {
    expect(isReviewFetching(testStore)).toEqual(false);
    expect(isSuccessReviewsFetching(testStore)).toEqual(false);
    expect(isErrorReviewFetching(testStore)).toEqual(false);
  });

  it(`getReviews will return fetching add review status from state`, () => {
    expect(isAddReviewFetching(testStore)).toEqual(false);
    expect(isSuccessAddReviewsFetching(testStore)).toEqual(false);
    expect(isErrorAddReviewFetching(testStore)).toEqual(false);
  });


});
