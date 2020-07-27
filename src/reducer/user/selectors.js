import NameSpace from "../name-space.js";
import {AuthorizationStatus} from "../../consts";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const isAuthorized = (state) => {
  return state[NAME_SPACE].authorizationStatus === AuthorizationStatus.AUTH;
};

export const getAuthorizationErrorMessage = (state) => {
  return state[NAME_SPACE].authorizationErrorMessage;
};

export const getUserProfile = (state) => {
  return state[NAME_SPACE].userProfile;
}
