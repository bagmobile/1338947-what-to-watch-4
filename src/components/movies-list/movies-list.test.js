import React from "react";
import renderer from "react-test-renderer";
import {mockMovies} from "../../mocks/movies.js";
import MoviesList from "./movies-list.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import {testStore} from "../../mocks/store";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`MoviesList component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <MoviesList movies={mockMovies}/>
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
            <MoviesList/>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
