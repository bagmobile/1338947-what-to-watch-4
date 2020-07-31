import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";


export default function withVideoPlayerControls(Component) {

  class WithVideoPlayerControls extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        progress: 0,
        remaining: 0,
      };
      this._videoRef = createRef();

      this._duration = 0;
      this._video = null;

      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
      this._onPauseButtonClick = this._onPauseButtonClick.bind(this);
      this._onFullscreenButtonClick = this._onFullscreenButtonClick.bind(this);
      this._onExitButtonClick = this._onExitButtonClick.bind(this);
      this._onCanPlayThrough = this._onCanPlayThrough.bind(this);
      this._onTimeUpdate = this._onTimeUpdate.bind(this);
    }

    componentDidMount() {
      this._video = this._videoRef.current;

      this._video.addEventListener(`timeupdate`, this._onTimeUpdate);
      this._video.addEventListener(`canplaythrough`, this._onCanPlayThrough);
    }

    componentWillUnmount() {
      this._video.removeEventListener(`timeupdate`, this._onTimeUpdate);
      this._video.removeEventListener(`canplaythrough`, this._onCanPlayThrough);
      this._videoRef = null;
    }

    _calculateRemainingTime() {
      return Math.floor(this._duration - this._video.currentTime);

    }

    _calculateProgress() {
      return this._video.currentTime / this._duration * 100;
    }

    _onFullscreenButtonClick() {

      if (this._video.requestFullscreen) {
        this._video.requestFullscreen();
      } else if (this._video.mozRequestFullScreen) {
        this._video.mozRequestFullScreen();
      } else if (this._video.webkitRequestFullscreen) {
        this._video.webkitRequestFullscreen();
      } else if (this._video.msRequestFullscreen) {
        this._video.msRequestFullscreen();
      }
    }

    _onCanPlayThrough() {
      this._duration = this._video.duration;
      this._onTimeUpdate();
      this._onPlayButtonClick();
    }

    _onPlayButtonClick() {
      this._video.play();
      this.setState({
        isPlaying: true,
      });
    }

    _onPauseButtonClick() {
      this._video.pause();
      this.setState({
        isPlaying: false,
      });
    }

    _onExitButtonClick() {
      this._video.load();
      this.setState({
        isPlaying: false,
      });
      this.props.onExitButtonClick();
    }

    _onTimeUpdate() {
      this.setState({
        progress: this._calculateProgress(),
        remaining: this._calculateRemainingTime(),
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
          progress={this.state.progress}
          remaining={this.state.remaining}
          isPlaying={this.state.isPlaying}
          onExitButtonClick={this._onExitButtonClick}
          onPauseButtonClick={this._onPauseButtonClick}
          onPlayButtonClick={this._onPlayButtonClick}
          onFullscreenButtonClick={this._onFullscreenButtonClick}
        />
      );
    }
  }

  WithVideoPlayerControls.propTypes = {
    onExitButtonClick: PropTypes.func.isRequired,
  };

  return WithVideoPlayerControls;
}
