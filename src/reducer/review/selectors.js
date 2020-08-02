import NameSpace from "../name-space";
import {FetchingStatus} from "../../consts";

const NAME_SPACE = NameSpace.REVIEW;

export const getReviews = (state) => state[NAME_SPACE].reviews;

export const getMessage = (state) => state[NAME_SPACE].message;

export const isReviewFetching = (state) => state[NAME_SPACE].reviewFetchingStatus === FetchingStatus.IN_PROGRESS;

export const isSuccessReviewsFetching = (state) => state[NAME_SPACE].reviewFetchingStatus === FetchingStatus.SUCCESS;

export const isErrorReviewFetching = (state) => state[NAME_SPACE].reviewFetchingStatus === FetchingStatus.ERROR;

export const isAddReviewFetching = (state) => state[NAME_SPACE].addReviewFetchingStatus === FetchingStatus.IN_PROGRESS;

export const isSuccessAddReviewsFetching = (state) => state[NAME_SPACE].addReviewFetchingStatus === FetchingStatus.SUCCESS;

export const isErrorAddReviewFetching = (state) => state[NAME_SPACE].addReviewFetchingStatus === FetchingStatus.ERROR;
