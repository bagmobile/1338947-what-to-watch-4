import React from "react";
import renderer from "react-test-renderer";
import UserBlock from "./user-block";

describe(`UserBlock component`, () => {

  it(`Render`, () => {

    const tree = renderer
      .create(<UserBlock/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
