import React from "react";
import renderer from "react-test-renderer";
import MovieCatalog from "./movie-catalog";
import {genres} from "../../settings.js";

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
