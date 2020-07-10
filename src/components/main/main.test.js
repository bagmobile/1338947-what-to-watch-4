import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {PromoMovie} from "../../mocks/promo-movie.js";


describe(`Main component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<Main
        promoMovie={PromoMovie}
      >
        <div className="children-component"/>
      </Main>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
