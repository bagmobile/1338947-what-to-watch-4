import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayerFullScreenButton from "./video-player-fullscreen-button";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerFullScreenButton should call handler 1 time`, () => {

  const handleClick = jest.fn(() => {});

  const fullscreenButton = mount(
      <VideoPlayerFullScreenButton
        onClick={handleClick}
      />
  );

  fullscreenButton.simulate(`click`);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
