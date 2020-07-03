import React from "react";
import renderer from "react-test-renderer";
import MovieInfoTab from "./movie-info-tab.jsx";

describe(`MovieInfoTab component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<MovieInfoTab
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
