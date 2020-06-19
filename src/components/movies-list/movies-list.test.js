import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import MoviesList from "./movies-list.jsx";

describe(`MoviesList component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MoviesList
        movies={movies}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render if empty movies`, () => {
    const tree = renderer
      .create(<MoviesList
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
