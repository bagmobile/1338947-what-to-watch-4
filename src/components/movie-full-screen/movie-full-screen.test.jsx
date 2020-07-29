import MovieFullScreen from "./movie-full-screen.connect";
import React from "react";
import configureStore from "redux-mock-store";
import {testStore} from "../../mocks/store";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);
const store = mockStore(testStore);

describe(`MovieFullScreen component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <StaticRouter>
              <MovieFullScreen
                movieId={1}
                history={{goBack: () => {}}}
              />
            </StaticRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


