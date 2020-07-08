import React from "react";
import renderer from "react-test-renderer";
import movies from "../../mocks/movies.js";
import {MovieInfo} from "./movie-info.jsx";

const movie = movies[0];

describe(`MovieInfo component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieInfo
        movie={movie}
      >
        <div className="children-component"/>
      </MovieInfo>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
