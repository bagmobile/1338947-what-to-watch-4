import React from "react";
import renderer from "react-test-renderer";
import MovieReview from "./movie-review";
import {mockReviews} from "../../mocks/movie-review";

const review = mockReviews[0];

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
