import {getAuthorizationStatus, getUserProfile} from "./selectors.js";
import {testStore} from "../../mocks/store";
import {AuthorizationStatus} from "../../consts";
import {getAuthorizationErrorMessage, isAuthorized} from "./selectors";

describe(`Simple Selectors will return a value from state`, () => {

  it(`getAuthorizationStatus will return a value from state`, () => {
    expect(getAuthorizationStatus(testStore)).toEqual(AuthorizationStatus.NO_AUTH);
  });

  it(`getAuthorizationErrorMessage will return a value from state`, () => {
    expect(getAuthorizationErrorMessage(testStore)).toEqual(``);
  });

  it(`getUserProfile will return a value from state`, () => {
    expect(getUserProfile(testStore)).toEqual(null);
  });

  it(`isAuthorized will return a value from state`, () => {
    expect(isAuthorized(testStore)).toEqual(false);
  });

});
