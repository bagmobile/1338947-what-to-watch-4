import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {mockReviews} from "../../mocks/movie-review";
import ReviewModel from "../../models/review";
import {ActionCreator, ActionType, initialState, Operation, reducer} from "./review";
import {APIPath, FetchingStatus, SuccessMessage} from "../../consts";

const api = createAPI(() => {
});

describe(`Reducer review component`, () => {

  it(`Reducer should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update reviews by load reviews`, () => {
    const reviews = mockReviews;
    expect(reducer({
      reviews: [],
    }, ActionCreator.loadReviews(reviews)))
      .toEqual({reviews});
  });

  it(`Reducer should update message`, () => {

    expect(reducer({
      message: ``,
    }, ActionCreator.addReview(`Message`)))
      .toEqual({message: `Message`});
  });

  it(`Reducer should update reviewFetchingStatus to getting value`, () => {

    expect(reducer({
      reviewFetchingStatus: null,
    }, ActionCreator.setReviewFetchingStatus(FetchingStatus.IN_PROGRESS)))
      .toEqual({reviewFetchingStatus: FetchingStatus.IN_PROGRESS});

    expect(reducer({
      reviewFetchingStatus: null,
    }, ActionCreator.setReviewFetchingStatus(FetchingStatus.SUCCESS)))
      .toEqual({reviewFetchingStatus: FetchingStatus.SUCCESS});

    expect(reducer({
      reviewFetchingStatus: null,
    }, ActionCreator.setReviewFetchingStatus(FetchingStatus.ERROR)))
      .toEqual({reviewFetchingStatus: FetchingStatus.ERROR});

    expect(reducer({
      reviewFetchingStatus: FetchingStatus.SUCCESS,
    }, ActionCreator.setReviewFetchingStatus(null)))
      .toEqual({reviewFetchingStatus: null});

  });

  it(`Reducer should update reviewAddFetchingStatus to getting value`, () => {

    expect(reducer({
      postedReviewFetchingStatus: null,
    }, ActionCreator.setAddReviewFetchingStatus(FetchingStatus.IN_PROGRESS)))
      .toEqual({postedReviewFetchingStatus: FetchingStatus.IN_PROGRESS});

    expect(reducer({
      postedReviewFetchingStatus: null,
    }, ActionCreator.setAddReviewFetchingStatus(FetchingStatus.SUCCESS)))
      .toEqual({postedReviewFetchingStatus: FetchingStatus.SUCCESS});

    expect(reducer({
      postedReviewFetchingStatus: null,
    }, ActionCreator.setAddReviewFetchingStatus(FetchingStatus.ERROR)))
      .toEqual({postedReviewFetchingStatus: FetchingStatus.ERROR});

    expect(reducer({
      postedReviewFetchingStatus: FetchingStatus.SUCCESS,
    }, ActionCreator.setAddReviewFetchingStatus(null)))
      .toEqual({postedReviewFetchingStatus: null});

  });
});

describe(`Operation work correctly`, () => {

  it(`Should make a correct API GET call to /comments`, function () {
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
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEW_FETCHING_STATUS,
          payload: FetchingStatus.IN_PROGRESS,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_REVIEWS,
          payload: ReviewModel.parseReviews(mockReviews),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_REVIEW_FETCHING_STATUS,
          payload: FetchingStatus.SUCCESS,
        });
      });
  });

  it(`Should make a correct API POST call to /comments/:id`, function () {
    const movieId = mockReviews[0].id;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addReviewOperation = Operation.addReview(movieId, 5, `text review`);

    apiMock
      .onPost(`${APIPath.REVIEWS}/${movieId}`, {rating: 5, comment: `text review`})
      .reply(200, mockReviews[0]);

    return addReviewOperation(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ADD_REVIEW_FETCHING_STATUS,
          payload: FetchingStatus.IN_PROGRESS,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_REVIEW,
          payload: SuccessMessage.ADD_REVIEW,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_ADD_REVIEW_FETCHING_STATUS,
          payload: FetchingStatus.SUCCESS,
        });
      });
  });

});
