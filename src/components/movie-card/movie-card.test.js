import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";
import {mockMovies} from "../../mocks/movies";

const movie = mockMovies[0];

describe(`MovieCard component`, () => {

  it(`Render default`, () => {
    const tree = renderer
      .create(<MovieCard
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render with poster`, () => {
    const tree = renderer
      .create(<MovieCard
        movie={movie}
        renderPoster={() => <div/>}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render with Add Review Button`, () => {
    const tree = renderer
      .create(<MovieCard
        movie={movie}
        renderReviewButton={() => <div/>}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
