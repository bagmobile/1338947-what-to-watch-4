import React from "react";
import PropTypes from "prop-types";
import VideoPlayerTimeline from "../video-player-timeline/video-player-timeline";
import VideoPlayerPlayButton from "../video-player-play-button/video-player-play-button";
import VideoPlayerPauseButton from "../video-player-pause-button/video-player-pause-button";
import VideoPlayerFullscreenButton from "../video-player-fullscreen-button/video-player-fullscreen-button";
import VideoPlayerExitButton from "../video-player-exit-button/video-player-exit-button";
import movieShape from "../../../types/movie";


export default function VideoPlayerContainer(props) {
  const {
    movie, isPlaying, videoRef, progress, remaining,
    onExitButtonClickHandler,
    onPauseButtonClickHandler,
    onPlayButtonClickHandler,
    onFullscreenButtonClickHandler,
  } = props;
  const {video, preview, title} = movie;

  return (
    <div className="player">

      <video
        ref={videoRef}
        className="player__video"
        autoPlay={true}
        loop={true}
        src={video}
        poster={preview}
        muted={false}
        controls={false}
      />

      <VideoPlayerExitButton onClick={onExitButtonClickHandler}/>

      <div className="player__controls">
        <VideoPlayerTimeline progress={progress} remaining={remaining}/>
        <div className="player__controls-row">
          {isPlaying
            ? <VideoPlayerPauseButton onClick={onPauseButtonClickHandler}/>
            : <VideoPlayerPlayButton onClick={onPlayButtonClickHandler}/>
          }
          <div className="player__name">{title}</div>
          <VideoPlayerFullscreenButton onClick={onFullscreenButtonClickHandler}/>

        </div>
      </div>
    </div>
  );
}

VideoPlayerContainer.propTypes = {
  movie: movieShape.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  videoRef: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  onExitButtonClickHandler: PropTypes.func.isRequired,
  onPauseButtonClickHandler: PropTypes.func.isRequired,
  onPlayButtonClickHandler: PropTypes.func.isRequired,
  onFullscreenButtonClickHandler: PropTypes.func.isRequired,
};
