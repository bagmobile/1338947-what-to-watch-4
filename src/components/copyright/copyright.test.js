import React from "react";
import renderer from "react-test-renderer";
import Copyright from "./copyright";


describe(`Copyright component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<Copyright/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
