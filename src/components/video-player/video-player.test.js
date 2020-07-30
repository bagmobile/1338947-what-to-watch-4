import React from "react";
import renderer from "react-test-renderer";
import {mockMovies} from "../../mocks/movies.js";
import VideoPlayer from "./video-player";

const movie = mockMovies[0];

describe(`VideoPlayer component`, () => {

  it(`Render`, () => {
    const tree = renderer
      .create(<VideoPlayer
        isPlaying={true}
        src={movie.preview}
        poster={movie.poster}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
