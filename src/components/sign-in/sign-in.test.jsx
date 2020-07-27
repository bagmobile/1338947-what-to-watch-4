import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SignIn from "./sign-in.connect";
import {BrowserRouter, Route} from "react-router-dom";
import {testStore} from "../../mocks/store";
import renderer from "react-test-renderer";
import React from "react";

it(`Should SignIn render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <SignIn/>
            </Route>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
