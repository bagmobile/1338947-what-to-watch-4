import React from "react";
import renderer from "react-test-renderer";
import {mockMovies} from "../../mocks/movies.js";
import MovieOverview from "./movie-overview";

const movie = mockMovies[0];

describe(`MovieOverview component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieOverview
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
