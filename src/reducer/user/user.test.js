import {ActionCreator, ActionType, reducer} from "./user.js";
import {AuthorizationStatus} from "../../consts";
import {initialState} from "./user";
import {extend} from "../../utils/util";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should change authorizationStatus by a given value`, () => {

  expect(reducer(initialState, ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .toEqual(extend(initialState, {authorizationStatus: AuthorizationStatus.AUTH}));


  expect(reducer(initialState, ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .toEqual(extend(initialState, {
      authorizationStatus: AuthorizationStatus.AUTH,
    }));

  expect(reducer(initialState, ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .toEqual(extend(initialState, {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }));

});

describe(`Action creators work correctly`, () => {

  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
    ).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userProfile: void 0
      }
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)
    ).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userProfile: void 0
      }
    });

  });

});
