import React from "react";
import renderer from "react-test-renderer";

import VideoPlayerContainer from "./video-player-container";
import {mockMovies} from "../../../mocks/movies";

const movie = mockMovies[0];

const mockRef = React.createRef();

it(`Should render VideoPlayerPage propperly`, () => {
  const tree = renderer.create(
      <VideoPlayerContainer
        movie={movie}
        isPlaying={true}
        videoRef={mockRef}
        progress={55}
        remaining={4522}
        onExitButtonClickHandler={()=>{}}
        onPauseButtonClickHandler={()=>{}}
        onPlayButtonClickHandler={()=>{}}
        onFullscreenButtonClickHandler={()=>{}}
      />
  );
  expect(tree).toMatchSnapshot();
});
