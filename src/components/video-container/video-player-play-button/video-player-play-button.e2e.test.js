import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayerPlayButton from "./video-player-play-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerPlayButton should call handler 1 time`, () => {

  const onClick = jest.fn(() => {});

  const playButton = mount(
      <VideoPlayerPlayButton
        onClick={onClick}
      />
  );

  playButton.find(`button`).simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
});