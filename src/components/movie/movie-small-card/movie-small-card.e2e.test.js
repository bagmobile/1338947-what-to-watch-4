import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockMovies} from "../../../mocks/movies.js";
import MovieSmallCard from "./movie-small-card";

const movie = mockMovies[0];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieSmallCard e2e component`, () => {


  it(`MovieSmallCard mouse hover`, () => {
    const onMouseHover = jest.fn((currentMovie) => currentMovie);

    const movieCard = shallow(
        <MovieSmallCard
          movie={movie}
          onMouseHover={onMouseHover}
        />
    );

    const movieCardElement = movieCard.find(`.small-movie-card`);

    movieCardElement.simulate(`mouseenter`);
    movieCardElement.simulate(`mouseleave`);

    expect(onMouseHover.mock.results[0].value).toBe(movie);
    expect(onMouseHover.mock.results[1].value).toBe(null);
  });

});


