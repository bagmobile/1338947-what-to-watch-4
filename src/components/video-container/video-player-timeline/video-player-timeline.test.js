import React from "react";
import renderer from "react-test-renderer";
import VideoPlayerTimeLine from "./video-player-timeline";

describe(`VideoPlayerTimeLine component`, () => {

  it(`Render`, () => {
    const tree = renderer.create(
        <VideoPlayerTimeLine
          progress={20}
          remaining={400}
        />
    );
    expect(tree).toMatchSnapshot();
  });

});

