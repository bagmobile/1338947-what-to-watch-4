import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter, Route} from 'react-router-dom';
import {testStore} from "../../../mocks/store";
import React from "react";
import {mockMovies} from "../../../mocks/movies";
import renderer from "react-test-renderer";
import FavoriteMovies from "./favorite-movies";


const mockStore = configureStore([]);

it(`Should My List render correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <FavoriteMovies movies={mockMovies} loadFavoriteMovies={() => {}}/>
            </Route>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
