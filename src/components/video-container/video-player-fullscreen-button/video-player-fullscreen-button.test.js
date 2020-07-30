import React from "react";
import renderer from "react-test-renderer";
import VideoPlayerFullscreenButton from "./video-player-fullscreen-button";

describe(`VideoPlayerFullscreenButton component`, () => {

  it(`Render`, () => {
    const tree = renderer.create(
        <VideoPlayerFullscreenButton
          onClick={()=>{}}
        />
    );
    expect(tree).toMatchSnapshot();
  });
});
