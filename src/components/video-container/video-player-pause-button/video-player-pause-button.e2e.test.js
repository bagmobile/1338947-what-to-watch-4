import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayerPauseButton from "./video-player-pause-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerPauseButton should call handler 1 time`, () => {

  const handleClick = jest.fn(() => {});

  const pauseButton = mount(
      <VideoPlayerPauseButton
        onClick={handleClick}
      />
  );

  pauseButton.simulate(`click`);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
