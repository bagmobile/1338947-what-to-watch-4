import React from "react";
import renderer from "react-test-renderer";
import {mockMovies} from "../../../mocks/movies.js";
import MovieSmallCard from "./movie-small-card";
import {StaticRouter} from "react-router-dom";

const movie = mockMovies[0];

describe(`MovieSmallCard component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <MovieSmallCard movie={movie}/>
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
