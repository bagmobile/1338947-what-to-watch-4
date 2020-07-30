import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo";
import {BrowserRouter, Route} from "react-router-dom";

describe(`Logo component`, () => {

  it(`Render logo default`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Route>
              <Logo/>
            </Route>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render logo with light`, () => {
    const tree = renderer
      .create(<BrowserRouter>
        <Route>
          <Logo isLight={true}/>
        </Route>
      </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
