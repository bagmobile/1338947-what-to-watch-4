import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import SmallMovieCard from "./small-movie-card.jsx";
import {StaticRouter} from "react-router-dom";

const movie = movies[0];

describe(`SmallMovieCard component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <SmallMovieCard movie={movie}/>
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
