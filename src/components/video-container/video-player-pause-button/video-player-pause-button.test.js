import React from "react";
import renderer from "react-test-renderer";

import VideoPlayerPauseButton from "./video-player-pause-button";

describe(`VideoPlayerPauseButton component`, () => {

  it(`Render`, () => {
    const tree = renderer.create(
        <VideoPlayerPauseButton
          onClick={() => {
          }}
        />);
    expect(tree).toMatchSnapshot();
  });
});
