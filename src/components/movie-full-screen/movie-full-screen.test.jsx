import MovieFullScreen from "./movie-full-screen.jsx";
import {mockMovies} from "../../mocks/movies";
import React from "react";

it(`Should VideoFullScreen render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<MovieFullScreen
      movie={mockMovies[0]}
      history={{goBack: () => {}}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

