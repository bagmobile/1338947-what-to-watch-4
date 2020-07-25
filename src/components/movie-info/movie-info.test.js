import React from "react";
import renderer from "react-test-renderer";
import {mockMovies} from "../../mocks/movies.js";
import {MovieInfo} from "./movie-info.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter, Route} from "react-router-dom";
import {mockReviews} from "../../mocks/movie-review";
import {testStore} from "../../mocks/store";

const movie = mockMovies[0];
const mockStore = configureStore([]);
const store = mockStore(testStore);


describe(`MovieInfo component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <MovieInfo
                  movie={movie}
                  reviews={mockReviews}
                  loadReviews={() => {
                  }}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
