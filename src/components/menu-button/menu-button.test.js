import React from "react";
import renderer from "react-test-renderer";
import MenuButton from "./menu-button";
import {StaticRouter} from "react-router-dom";
import {mockMovies} from "../../mocks/movies";

describe(`MenuButton component`, () => {

  it(`Render`, () => {

    const tree = renderer
      .create(
          <StaticRouter>
            <MenuButton
              movie={mockMovies[0]}
              onFavoriteToggle={() => {}}
            />
          </StaticRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
