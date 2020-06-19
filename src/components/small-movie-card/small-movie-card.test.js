import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import SmallMovieCard from "./small-movie-card";

const movie = movies[0];

describe(`SmallMovieCard component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<SmallMovieCard
        movie={movie}
        onClick={() => {}}
        onMouseHover={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
