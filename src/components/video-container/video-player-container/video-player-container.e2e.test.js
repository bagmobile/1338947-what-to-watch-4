import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayerContainer from "./video-player-container";
import {mockMovies} from "../../../mocks/movies";

const movie = mockMovies[0];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerContainer should call every handler 1 time`, () => {

  const mockRef = React.createRef();

  const handlePlayClick = jest.fn(() => {
  });
  const handlePauseClick = jest.fn(() => {
  });
  const handleFullScreenClick = jest.fn(() => {
  });
  const handleExitClick = jest.fn(() => {
  });

  const videoPlayerContainer = mount(
      <VideoPlayerContainer
        movie={movie}
        isPlaying={false}
        videoRef={mockRef}
        progress={55}
        remaining={300}
        onExitButtonClick={handleExitClick}
        onPauseButtonClick={handlePauseClick}
        onPlayButtonClick={handlePlayClick}
        onFullscreenButtonClick={handleFullScreenClick}
      />
  );


  videoPlayerContainer.find(`.player__play`).simulate(`click`);

  videoPlayerContainer.setProps({isPlaying: true});

  videoPlayerContainer.find(`.player__play`).simulate(`click`);
  videoPlayerContainer.find(`.player__exit`).simulate(`click`);
  videoPlayerContainer.find(`.player__full-screen`).simulate(`click`);

  expect(handleExitClick).toHaveBeenCalledTimes(1);
  expect(handlePauseClick).toHaveBeenCalledTimes(1);
  expect(handlePlayClick).toHaveBeenCalledTimes(1);
  expect(handleFullScreenClick).toHaveBeenCalledTimes(1);
});
