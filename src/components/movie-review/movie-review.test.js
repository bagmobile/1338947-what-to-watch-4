import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import MovieReview from "./movie-review.jsx";

const review = movies[0].reviews[0];

describe(`MovieReview component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieReview
        review={review}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
