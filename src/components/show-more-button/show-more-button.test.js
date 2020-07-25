import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {testStore} from "../../mocks/store";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`ShowMoreButton component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <ShowMoreButton/>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
