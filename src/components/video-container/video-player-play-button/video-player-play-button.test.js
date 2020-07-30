import React from "react";
import renderer from "react-test-renderer";
import VideoPlayerPlayButton from "./video-player-play-button";

describe(`VideoPlayerPlayButton component`, () => {

  it(`Render`, () => {
    const tree = renderer.create(
        <VideoPlayerPlayButton
          onClick={() => {}}
        />);
    expect(tree).toMatchSnapshot();
  });

});
