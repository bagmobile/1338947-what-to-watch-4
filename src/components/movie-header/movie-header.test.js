import React from "react";
import renderer from "react-test-renderer";
import MovieHeader from "./movie-header";
import movies from "../../mocks/movies";

const movie = movies[0];

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
