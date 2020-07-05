import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";

describe(`Logo component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<Logo/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
