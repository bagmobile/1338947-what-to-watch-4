import React from "react";
import renderer from "react-test-renderer";
import MenuButton from "./menu-button.jsx";

describe(`MenuButton component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MenuButton
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
