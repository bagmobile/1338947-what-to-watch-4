import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {PromoMovie} from "../../mocks/promo-movie.js";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {initialState as dataState} from "../../reducer/data/data";
import {initialState as moviesListState} from "../../reducer/movies-list/movies-list";

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: dataState,
  [NameSpace.MOVIES_LIST]: moviesListState
});

describe(`Main component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Route>
                <Main promoMovie={PromoMovie}/>
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
