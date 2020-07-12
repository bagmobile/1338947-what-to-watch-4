import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieGenresList} from "./movie-genres-list";
import {genres} from "../../mocks/movies";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieGenresList e2e component`, () => {

  it(`MovieGenresList action click`, () => {
    const onClick = jest.fn((currentGenre) => currentGenre);

    const moveGenresList = mount(
        <MovieGenresList
          genres={genres}
          activeGenre={genres[0]}
          onClick={onClick}
        />
    );

    const genreItems = moveGenresList.find(`.catalog__genres-item`);

    genreItems.forEach((genreItem) => {
      genreItem.simulate(`click`);
    });

    expect(onClick).not.toHaveBeenCalledWith(genres[0]);

    const genresAnswer = genres.filter((item) => item !== genres[0]);
    onClick.mock.results.forEach((result, index) => {
      expect(result.value).toBe(genresAnswer[index]);
    });

    expect(onClick).toHaveBeenCalledTimes(genreItems.length - 1);
  });
});
