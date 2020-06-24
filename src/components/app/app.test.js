import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import movies from "../../mocks/movies.js";

describe(`App component`, () => {

  it(`Render`, () => {
    const tree = renderer.create(<App
      movies={movies}
    />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
