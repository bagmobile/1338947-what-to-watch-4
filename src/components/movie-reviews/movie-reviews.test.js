import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import MovieReviews from "./movie-reviews.jsx";

const movie = movies[0];

describe(`MovieReviews component`, () => {

  it(`Render with column count 0`, () => {
    const tree = renderer
      .create(<MovieReviews
        reviews={movie.reviews}
        columns={0}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render with column count 2`, () => {
    const tree = renderer
      .create(<MovieReviews
        reviews={movie.reviews}
        columns={2}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
