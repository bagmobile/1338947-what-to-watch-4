import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import MovieInfo from "./movie-info.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter, Route} from "react-router-dom";
import NameSpace from "../../reducer/name-space";
import {initialState as dataState} from "../../reducer/data/data";
import {initialState as moviesListState} from "../../reducer/movies-list/movies-list";

const movie = movies[0];
const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: dataState,
  [NameSpace.MOVIES_LIST]: moviesListState
});

describe(`MovieInfo component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <MovieInfo movie={movie}/>
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
