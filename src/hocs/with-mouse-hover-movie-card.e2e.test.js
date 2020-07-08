import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import movies from "../mocks/movies.js";
import withMouseHoverMovieCard from "./with-mouse-hover-movie-card.js";

const movie = movies[0];

function MockComponent() {
  return <div/>;
}

const WrappedMockComponent = withMouseHoverMovieCard(MockComponent);

Enzyme.configure({
  adapter: new Adapter(),
});

jest.useFakeTimers();

describe(`VideoPlayer e2e Component`, () => {

  it(`MouseHover action to play video`, () => {

    const movieCardWrapped = mount(
        <WrappedMockComponent
          movie={movie}
        />
    );

    movieCardWrapped.find(MockComponent).prop(`onMouseHover`)(null);
    movieCardWrapped.update();
    expect(movieCardWrapped.find(MockComponent).prop(`isPlaying`)).toEqual(false);

    movieCardWrapped.find(MockComponent).prop(`onMouseHover`)(movie);
    jest.advanceTimersByTime(1000);
    movieCardWrapped.update();
    expect(movieCardWrapped.find(MockComponent).prop(`isPlaying`)).toEqual(true);

    movieCardWrapped.find(MockComponent).prop(`onMouseHover`)(null);
    movieCardWrapped.update();
    expect(movieCardWrapped.find(MockComponent).prop(`isPlaying`)).toEqual(false);

  });

});
