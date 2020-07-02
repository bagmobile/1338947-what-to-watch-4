import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {

  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {src, poster} = this.props;

    return (
      <video
        ref={this._videoRef}
        src={src}
        poster={poster}
        width="280"
        height="175"
        loop={true}
        muted={true}
      >
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};
