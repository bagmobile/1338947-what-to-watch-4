import React from "react";
import renderer from "react-test-renderer";
import {mockMovies} from "../../../mocks/movies.js";
import MovieDetails from "./movie-details";

const movie = mockMovies[0];

describe(`MovieDetails component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieDetails
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
