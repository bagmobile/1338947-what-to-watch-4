import React from "react";
import renderer from "react-test-renderer";
import {mockMovies} from "../../mocks/movies.js";
import MovieReview from "./movie-review.jsx";

const review = mockMovies[0].reviews[0];

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
