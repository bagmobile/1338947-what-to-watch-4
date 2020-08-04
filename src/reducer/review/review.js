import {extend} from "../../utils/common";
import {APIPath, ErrorMessage, FetchingStatus, SuccessMessage} from "../../consts";
import ReviewModel from "../../models/review";

const initialState = {
  reviews: [],
  message: ``,
  reviewFetchingStatus: null,
  postedReviewFetchingStatus: null,
};

const ActionType = {
  SET_REVIEW_FETCHING_STATUS: `SET_REVIEW_FETCHING_STATUS`,
  SET_ADD_REVIEW_FETCHING_STATUS: `SET_ADD_REVIEW_FETCHING_STATUS`,
  ADD_REVIEW: `ADD_COMMENT`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  addReview: (message) => {
    return {
      type: ActionType.ADD_REVIEW,
      payload: message
    };
  },
  setReviewFetchingStatus: (status) => {
    return {
      type: ActionType.SET_REVIEW_FETCHING_STATUS,
      payload: status
    };
  },
  setAddReviewFetchingStatus: (status) => {
    return {
      type: ActionType.SET_ADD_REVIEW_FETCHING_STATUS,
      payload: status
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
};

const Operation = {

  addReview: (movieId, rating, comment) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setAddReviewFetchingStatus(FetchingStatus.IN_PROGRESS));
    return api.post(`${APIPath.REVIEWS}/${movieId}`, {rating, comment})
      .then(() => {
        dispatch(ActionCreator.addReview(SuccessMessage.ADD_REVIEW));
        dispatch(ActionCreator.setAddReviewFetchingStatus(FetchingStatus.SUCCESS));
      })
      .catch((err) => {
        const {response} = err;
        if (response) {
          dispatch(ActionCreator.addReview(response.data.error));
        } else {
          dispatch(ActionCreator.addReview(ErrorMessage.UNKNOWN_NETWORK_ERROR));
        }
        dispatch(ActionCreator.setAddReviewFetchingStatus(FetchingStatus.ERROR));
      });
  },
  loadReviews: (movieId) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setReviewFetchingStatus(FetchingStatus.IN_PROGRESS));
    return api.get(`${APIPath.REVIEWS}/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(ReviewModel.parseReviews(response.data)));
        dispatch(ActionCreator.setReviewFetchingStatus(FetchingStatus.SUCCESS));
      })
      .catch((err) => {
        dispatch(ActionCreator.setReviewFetchingStatus(FetchingStatus.ERROR));
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return extend(state, {
        message: action.payload,
      });
    case ActionType.SET_REVIEW_FETCHING_STATUS:
      return extend(state, {
        reviewFetchingStatus: action.payload,
      });
    case ActionType.SET_ADD_REVIEW_FETCHING_STATUS:
      return extend(state, {
        postedReviewFetchingStatus: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, initialState, ActionCreator, Operation};
