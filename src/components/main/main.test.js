import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.connect";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {testStore} from "../../mocks/store";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`Main component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <Main/>
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
