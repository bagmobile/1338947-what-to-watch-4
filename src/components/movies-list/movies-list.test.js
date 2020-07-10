import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import MoviesList from "./movies-list.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

const mockStore = configureStore([]);
const store = mockStore({movies});

describe(`MoviesList component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <MoviesList movies={movies}/>
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render if empty movies`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MoviesList
            />
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
