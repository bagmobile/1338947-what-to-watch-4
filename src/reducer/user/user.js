import {APIPath, AuthorizationStatus, ErrorMessage, FetchingStatus} from "../../consts";
import UserProfile from "../../models/user-profile";
import {extend} from "../../utils/common";

export const initialState = {
  userProfile: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationErrorMessage: ``,
  fetchingStatus: FetchingStatus.IN_PROGRESS
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTHORIZATION_ERROR: `SET_AUTHORIZATION_ERROR`,
  SET_FETCHING_STATUS: `SET_FETCHING_STATUS`,
};

const ActionCreator = {
  requireAuthorization: (authorizationStatus, userProfile) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {authorizationStatus, userProfile},
    };
  },
  setAuthorizationError: (errorMessage) => {
    return {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: errorMessage,
    };
  },
  setFetchingStatus: (status) => {
    return {
      type: ActionType.SET_FETCHING_STATUS,
      payload: status,
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(FetchingStatus.IN_PROGRESS));
    return api.get(APIPath.LOGIN)
      .then((response) => {
        const userProfile = new UserProfile(response.data);
        if (userProfile) {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, userProfile));
          dispatch(ActionCreator.setFetchingStatus(FetchingStatus.SUCCESS));
        } else {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
          dispatch(ActionCreator.setAuthorizationError(ErrorMessage.INVALID_USER_DATA));
        }
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        dispatch(ActionCreator.setFetchingStatus(FetchingStatus.ERROR));
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(FetchingStatus.IN_PROGRESS));
    return api.post(APIPath.LOGIN, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        const userProfile = new UserProfile(response.data);
        if (userProfile) {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, userProfile));
          dispatch(ActionCreator.setFetchingStatus(FetchingStatus.SUCCESS));
        } else {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
          dispatch(ActionCreator.setAuthorizationError(ErrorMessage.INVALID_USER_DATA));
        }
      })
      .catch((err) => {
        const {response} = err;
        if (response) {
          dispatch(ActionCreator.setAuthorizationError(response.data.error));
          dispatch(ActionCreator.setFetchingStatus(FetchingStatus.ERROR));
        }
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload.authorizationStatus,
        userProfile: action.payload.userProfile || state.userProfile,
      });
    case ActionType.SET_AUTHORIZATION_ERROR:
      return extend(state, {authorizationErrorMessage: action.payload});
    case ActionType.SET_FETCHING_STATUS:
      return extend(state, {fetchingStatus: action.payload});
  }

  return state;
};

export {ActionCreator, ActionType, Operation, reducer};
