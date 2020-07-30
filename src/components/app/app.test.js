import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import App from "./app";
import {Provider} from "react-redux";
import {testStore} from "../../mocks/store";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`App component`, () => {

  it(`Render`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <App init={() => {}}/>
        </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
