import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = movies[0];

describe(`SmallMovieCard component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<SmallMovieCard
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
