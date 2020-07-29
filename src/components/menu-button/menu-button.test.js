import React from "react";
import renderer from "react-test-renderer";
import MenuButton from "./menu-button.jsx";
import {StaticRouter} from "react-router-dom";

describe(`MenuButton component`, () => {

  it(`Render`, () => {

    const tree = renderer
      .create(
          <StaticRouter>
            <MenuButton
              movieId={1}
              isFavorite={true}
              toggleFavorite={() => {}}
            />
          </StaticRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
