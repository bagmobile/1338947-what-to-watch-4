import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import MovieDescription from "./movie-description.jsx";

const movie = movies[0];

describe(`MovieDescription component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieDescription
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
