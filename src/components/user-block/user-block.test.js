import React from "react";
import renderer from "react-test-renderer";
import UserBlock from "./user-block.connect";
import {BrowserRouter, Route} from "react-router-dom";
import configureStore from "redux-mock-store";
import {testStore} from "../../mocks/store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`UserBlock component`, () => {

  it(`Render`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <UserBlock/>
              </Route>
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
