import MovieFullScreen from "./movie-full-screen";
import React from "react";
import configureStore from "redux-mock-store";
import {testStore} from "../../../mocks/store";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";
import {mockMovies} from "../../../mocks/movies";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`MovieFullScreen component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <StaticRouter>
              <MovieFullScreen
                movie={mockMovies[0]}
              />
            </StaticRouter>
          </Provider>,
          {
            createNodeMock: (element) => {
              if (element.type === `video`) {
                return {
                  addEventListener: () => {}
                };
              }
              return null;
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


