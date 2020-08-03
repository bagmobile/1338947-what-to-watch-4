import {ActionCreator, reducer} from "./user.js";
import {APIPath, AuthorizationStatus, FetchingStatus} from "../../consts";
import {initialState} from "./user";
import {extend} from "../../utils/common";
import MockAdapter from "axios-mock-adapter";
import {ActionType, Operation} from "../user/user";
import {createAPI} from "../../api";
import {mockUserProfile} from "../../mocks/user";
import UserProfile from "../../models/user-profile";

const api = createAPI(() => {
});

describe(`Reducer user component`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should change authorizationStatus by a given value`, () => {

    expect(reducer(initialState, ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .toEqual(extend(initialState, {authorizationStatus: AuthorizationStatus.AUTH}));

    expect(reducer(initialState, ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
      .toEqual(extend(initialState, {authorizationStatus: AuthorizationStatus.NO_AUTH}));

  });

  it(`Reducer should change error message`, () => {
    expect(reducer(initialState, ActionCreator.setAuthorizationError(`Error`)))
      .toEqual(extend(initialState, {authorizationErrorMessage: `Error`}));
  });

  it(`Reducer should update fetchingStatus to getting value`, () => {

    expect(reducer({
      fetchingStatus: null,
    }, ActionCreator.setFetchingStatus(FetchingStatus.IN_PROGRESS)))
      .toEqual({fetchingStatus: FetchingStatus.IN_PROGRESS});

    expect(reducer({
      fetchingStatus: null,
    }, ActionCreator.setFetchingStatus(FetchingStatus.SUCCESS)))
      .toEqual({fetchingStatus: FetchingStatus.SUCCESS});

    expect(reducer({
      fetchingStatus: null,
    }, ActionCreator.setFetchingStatus(FetchingStatus.ERROR)))
      .toEqual({fetchingStatus: FetchingStatus.ERROR});

  });


});

describe(`Operation work correctly`, () => {

  it(`Should make a correct API GET call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthOperation = Operation.checkAuth();

    apiMock
      .onGet(`${APIPath.LOGIN}`)
      .reply(200, mockUserProfile);

    return checkAuthOperation(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FETCHING_STATUS,
          payload: FetchingStatus.IN_PROGRESS,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {
            authorizationStatus: AuthorizationStatus.AUTH,
            userProfile: UserProfile.parseUserProfile(mockUserProfile)
          },
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_FETCHING_STATUS,
          payload: FetchingStatus.SUCCESS,
        });
      });
  });

  it(`Should make a correct API POST call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginOperation = Operation.login({email: `test@test.ru`, password: `test`});

    apiMock
      .onPost(`${APIPath.LOGIN}`, {email: `test@test.ru`, password: `test`})
      .reply(200, mockUserProfile);

    return loginOperation(dispatch, () => {
    }, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_FETCHING_STATUS,
        payload: FetchingStatus.IN_PROGRESS,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: {
          authorizationStatus: AuthorizationStatus.AUTH,
          userProfile: UserProfile.parseUserProfile(mockUserProfile)
        },
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SET_FETCHING_STATUS,
        payload: FetchingStatus.SUCCESS,
      });
    });
  });

});
