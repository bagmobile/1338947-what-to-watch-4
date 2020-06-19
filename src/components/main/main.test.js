import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import movies from "../../mocks/movies.js";
import {PromoMovie} from "../../mocks/promo-movie.js";

describe(`Main component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<Main
        movies={movies}
        promoMovie={PromoMovie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
