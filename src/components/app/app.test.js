import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import {initialState} from "../../reducer";
import {genres} from "../../mocks/movies";
import {getPromoMovie} from "../../selectors";

const mockStore = configureStore([]);

describe(`App component`, () => {

  it(`Render`, () => {
    const store = mockStore(initialState);
    const tree = renderer.create(
        <Provider store={store}>
          <App
            genres={genres}
            promoMovie={getPromoMovie(initialState)}
          />
        </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
