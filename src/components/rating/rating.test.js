import React from "react";
import renderer from "react-test-renderer";
import Rating from "./rating";
import {COUNT_RATING_STARS} from "../../consts";


describe(`Rating component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<Rating
        count={COUNT_RATING_STARS}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
