import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import movies from "../../mocks/movies.js";
import MoviesList from "./movies-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MoviesList e2e component`, () => {

  it(`MoviesList all small movie card click`, () => {
    const onClick = jest.fn((...args) => [...args]);

    const moviesList = mount(
        <MoviesList
          movies={movies}
          onSmallMovieCardClick={onClick}
        />
    );

    const smallMovieCartLinks = moviesList.find(`a.small-movie-card__link`);
    const smallMovieCartImages = moviesList.find(`.small-movie-card__image`);

    smallMovieCartLinks.forEach((movieCartLink) => {
      movieCartLink.simulate(`click`);
    });

    smallMovieCartImages.forEach((smallMovieCardImage)=>{
      smallMovieCardImage.simulate(`click`);
    });

    onClick.mock.calls.forEach((call, index) => {
      expect(call[0]).toMatchObject([...movies, ...movies][index]);
    });

    expect(onClick).toHaveBeenCalledTimes(smallMovieCartLinks.length + smallMovieCartImages.length);

  });

});


