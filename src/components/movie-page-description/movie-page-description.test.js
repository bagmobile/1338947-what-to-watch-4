import React from "react";
import renderer from "react-test-renderer";
import MoviePageDescription from "./movie-page-description.jsx";
import movies from "../../mocks/movies";
import {Tab} from "./movie-page-description";

const movie = movies[0];

describe(`MoviePageDescription component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MoviePageDescription
        movie={movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render with custom activeTab`, () => {
    const tree = renderer
      .create(<MoviePageDescription
        movie={movie}
        activeTab={Tab.REVIEWS}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
