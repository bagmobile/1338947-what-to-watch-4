import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";
import {mockReviews} from "../../../mocks/movie-review";
import ReviewModel from "../../../models/review";

const reviews = mockReviews;

describe(`MovieReviews component`, () => {

  it(`Render with column count 0`, () => {
    const tree = renderer
      .create(<MovieReviews
        reviews={ReviewModel.parseReviews(reviews)}
        columns={0}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render with column count 2`, () => {
    const tree = renderer
      .create(<MovieReviews
        reviews={ReviewModel.parseReviews(reviews)}
        columns={2}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
