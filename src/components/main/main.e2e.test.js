import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Movie card link click`, () => {
  const onMovieCardClick = jest.fn();

  const movieCard = shallow(
      <Main
        onMovieCardClick={onMovieCardClick}
      />
  );

  const movieCardLinks = movieCard.find(`a.small-movie-card__link`);

  movieCardLinks.forEach((movieCardLink) => {
    movieCardLink.props().onClick();
  });

  expect(onMovieCardClick).toHaveBeenCalledTimes(movieCardLinks.length);
});
