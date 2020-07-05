import React from "react";
import renderer from "react-test-renderer";
import MovieCatalog from "./movie-catalog";
import {genres} from "../../mocks/movies.js";

describe(`MovieCatalog component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieCatalog
        genres={genres}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
