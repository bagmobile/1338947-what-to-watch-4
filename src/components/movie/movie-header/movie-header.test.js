import React from "react";
import renderer from "react-test-renderer";
import MovieHeader from "./movie-header";
import {mockMovies} from "../../../mocks/movies";

const movie = mockMovies[0];

describe(`MovieHeader component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieHeader
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
