import React from "react";
import renderer from "react-test-renderer";
import {MovieGenresList} from "./movie-genres-list";
import {genres} from "../../mocks/movies.js";

describe(`MovieGenresList component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieGenresList
        genres={genres}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
