import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const MovieDescription = {
  title: `Film`,
  genre: `Comedy`,
  year: 2020
};

const movies = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `No Country for Old Men`,
  `Macbeth`
];

const handlerMovieCardClick = () => {};

describe(`Render component`, () => {

  it(`Render Main`, () => {
    const tree = renderer
      .create(<Main
        description={MovieDescription}
        movies={movies}
        onMovieCardClick={handlerMovieCardClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Main with default props`, () => {
    const tree = renderer
      .create(<Main
        onMovieCardClick={handlerMovieCardClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
