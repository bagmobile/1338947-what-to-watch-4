import {APIPath, AuthorizationStatus, ErrorMessage} from "../../consts";
import UserProfile from "../../models/user-profile";
import {extend} from "../../utils/util";

export const initialState = {
  userProfile: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationErrorMessage: ``,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTHORIZATION_ERROR: `SET_AUTHORIZATION_ERROR`,
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
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {

    return api.get(APIPath.LOGIN)
      .then((response) => {
        const userProfile = new UserProfile(response.data);
        if (userProfile) {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, userProfile));
        } else {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        }
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },
  login: (authData) => (dispatch, getState, api) => {

    return api.post(APIPath.LOGIN, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        const userProfile = new UserProfile(response.data);
        if (userProfile) {
          return dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, userProfile));
        }
        return dispatch(ActionCreator.setAuthorizationError(ErrorMessage.INVALID_USER_DATA));
      })
      .catch((err) => {
        const {response} = err;
        if (response) {
          dispatch(ActionCreator.setAuthorizationError(response.data.error));
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
  }

  return state;
};

export {ActionCreator, ActionType, Operation, reducer};
