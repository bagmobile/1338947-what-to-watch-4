import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import App from "./app.jsx";
import {Provider} from "react-redux";
import {initialState as moviesListState} from "../../reducer/movies-list/movies-list";
import {initialState as dataState} from "../../reducer/data/data";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

describe(`App component`, () => {

  it(`Render`, () => {
    const store = mockStore({
      [NameSpace.DATA]: dataState,
      [NameSpace.MOVIES_LIST]: moviesListState
    });
    const tree = renderer.create(
        <Provider store={store}>
          <App/>
        </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
