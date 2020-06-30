import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import movies from "../mocks/movies.js";
import withMouseHoverMovieCard from "./with-mouse-hover-movie-card";
import SmallMovieCard from "../components/small-movie-card/small-movie-card";

const movie = movies[0];
const SmallMovieCardWrapped = withMouseHoverMovieCard(SmallMovieCard);

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`VideoPlayer e2e Component`, () => {

  it(`MouseHover action to play video`, () => {

    const movieCardWrapped = mount(
        <SmallMovieCardWrapped
          movie={movie}
        />
    );

    expect(movieCardWrapped.state().isHovered).toEqual(false);

  });

});
