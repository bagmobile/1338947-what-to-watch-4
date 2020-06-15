import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

  it(`Render App`, () => {
    const tree = renderer
      .create(<App
        movieDescription={MovieDescription}
        moviesList={movies}
        onMovieCardClick={handlerMovieCardClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
