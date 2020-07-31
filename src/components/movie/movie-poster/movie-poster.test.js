import React from "react";
import renderer from "react-test-renderer";
import {mockMovies} from "../../../mocks/movies.js";
import MoviePoster from "./movie-poster";

const movie = mockMovies[0];

describe(`MovieOverview component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MoviePoster
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
