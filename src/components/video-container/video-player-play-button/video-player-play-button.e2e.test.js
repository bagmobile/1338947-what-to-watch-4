import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayerPlayButton from "./video-player-play-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerPlayButton should call handler 1 time`, () => {

  const handleClick = jest.fn(() => {});

  const playButton = mount(
      <VideoPlayerPlayButton
        onClick={handleClick}
      />
  );

  playButton.find(`button`).simulate(`click`);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
