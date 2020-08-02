import NameSpace from "../name-space.js";
import {AuthorizationStatus, FetchingStatus} from "../../consts";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const isAuthorized = (state) => {
  return getAuthorizationStatus(state) === AuthorizationStatus.AUTH;
};

export const getAuthorizationErrorMessage = (state) => {
  return state[NAME_SPACE].authorizationErrorMessage;
};

export const isFetching = (state) => {
  return state[NAME_SPACE].fetchingStatus === FetchingStatus.IN_PROGRESS;
};

export const isDefaultFetching = (state) => {
  return state[NAME_SPACE].fetchingStatus === null;
};

export const getUserProfile = (state) => {
  return state[NAME_SPACE].userProfile;
};
