import React from "react";
import renderer from "react-test-renderer";
import VideoPlayerExitButton from "./video-player-exit-button";

describe(`VideoPlayerExitButton`, () => {

  it(`Render`, () => {
    const tree = renderer.create(
        <VideoPlayerExitButton
          onClick={()=>{}}
        />
    );
    expect(tree).toMatchSnapshot();
  });

});
