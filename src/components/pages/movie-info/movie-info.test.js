import React from "react";
import renderer from "react-test-renderer";
import MovieInfo from "./movie-info.connect";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {BrowserRouter, Route} from "react-router-dom";
import {testStore} from "../../../mocks/store";
import {createAPI} from "../../../api";
import {LinkPath} from "../../../consts";

const api = createAPI(() => {});
const mockStore = configureStore([thunk.withExtraArgument(api)]);
const store = mockStore(testStore);


describe(`MovieInfo component`, () => {

  it(`Render`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route path={`${LinkPath.MOVIES}/1`}>
                <MovieInfo/>
              </Route>
            </BrowserRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
