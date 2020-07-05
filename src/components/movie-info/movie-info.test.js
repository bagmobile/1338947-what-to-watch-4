import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import MovieInfo from "./movie-info.jsx";

const movie = movies[0];

describe(`MovieInfo component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieInfo
        movies={movies}
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
