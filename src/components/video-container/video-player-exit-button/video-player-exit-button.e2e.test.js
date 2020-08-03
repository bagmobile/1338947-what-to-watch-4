import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayerExitButton from "./video-player-exit-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`VideoPlayerExitButton should call handler 1 time`, () => {

  const handleClick = jest.fn(() => {});

  const exitButton = mount(
      <VideoPlayerExitButton
        onClick={handleClick}
      />
  );

  exitButton.simulate(`click`);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
