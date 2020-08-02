import React from "react";
import renderer from "react-test-renderer";
import MoviePageDescription from "./movie-page-description";
import {mockMovies} from "../../../mocks/movies";
import {Tab} from "../../../consts";
import {mockReviews} from "../../../mocks/movie-review";
import ReviewModel from "../../../models/review";

const movie = mockMovies[0];

describe(`MoviePageDescription component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MoviePageDescription
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render with custom activePage`, () => {
    const tree = renderer
      .create(<MoviePageDescription
        movie={movie}
        activePage={Tab.REVIEWS}
        reviews={ReviewModel.parseReviews(mockReviews)}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
