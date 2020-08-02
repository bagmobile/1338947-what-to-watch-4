import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {StaticRouter} from 'react-router-dom';
import {testStore} from "../../../mocks/store";
import React from "react";
import renderer from "react-test-renderer";
import FavoriteMovies from "./favorite-movies";
import {mockMovies} from "../../../mocks/movies";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`FavoriteMovies component`, () => {

  it(`Render with movies equal []`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <StaticRouter>
              <FavoriteMovies
                movies={[]}
                loadFavoriteMovies={() => {
                }}
                isLoadMoviesStatusFetching={false}/>
            </StaticRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render with isLoadMoviesStatusFetching equal true`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <StaticRouter>
              <FavoriteMovies
                movies={mockMovies}
                loadFavoriteMovies={() => {
                }}
                isLoadMoviesStatusFetching={true}/>
            </StaticRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render with isLoadMoviesStatusFetching equal false`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <StaticRouter>
              <FavoriteMovies
                movies={mockMovies}
                loadFavoriteMovies={() => {
                }}
                isLoadMoviesStatusFetching={false}/>
            </StaticRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
