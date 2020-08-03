import React from "react";
import renderer from "react-test-renderer";
import UserBlock from "./user-block";
import configureStore from "redux-mock-store";
import {testStore} from "../../mocks/store";
import {Provider} from "react-redux";
import {mockUserProfile} from "../../mocks/user";
import {StaticRouter} from "react-router-dom";
import UserProfile from "../../models/user-profile";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`UserBlock component`, () => {

  it(`Render if user authorized`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <StaticRouter>
              <UserBlock
                isAuthorized={true}
                userProfile={UserProfile.parseUserProfile(mockUserProfile)}/>
            </StaticRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render if user unauthorized`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <StaticRouter>
              <UserBlock
                isAuthorized={false}
                userProfile={UserProfile.parseUserProfile(mockUserProfile)}/>
            </StaticRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
