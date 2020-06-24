import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import MovieOverview from "./movie-overview.jsx";

const movie = movies[0];

describe(`MovieOverview component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieOverview
        movies={movies}
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
