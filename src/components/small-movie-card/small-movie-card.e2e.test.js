import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import movies from "../../mocks/movies.js";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = movies[0];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard e2e component`, () => {


  it(`SmallMovieCard mouse hover`, () => {
    const onMouseHover = jest.fn((currentMovie) => currentMovie);

    const movieCard = shallow(
        <SmallMovieCard
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


