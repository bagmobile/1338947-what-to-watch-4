import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SignIn from "./sign-in.connect";
import {StaticRouter} from "react-router-dom";
import {testStore} from "../../../mocks/store";
import renderer from "react-test-renderer";
import React from "react";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`SignIn component`, () => {

  it(`Should SignIn render correctly`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <StaticRouter>
              <SignIn/>
            </StaticRouter>
          </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
