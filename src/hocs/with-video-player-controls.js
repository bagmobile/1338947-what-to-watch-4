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

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._handlePauseButtonClick = this._handlePauseButtonClick.bind(this);
      this._handleFullscreenButtonClick = this._handleFullscreenButtonClick.bind(this);
      this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
      this._handleCanPlayThrough = this._handleCanPlayThrough.bind(this);
      this.__handleTimeUpdate = this.__handleTimeUpdate.bind(this);
    }

    componentDidMount() {
      this._video = this._videoRef.current;

      this._video.addEventListener(`timeupdate`, this.__handleTimeUpdate);
      this._video.addEventListener(`canplaythrough`, this._handleCanPlayThrough);
    }

    componentWillUnmount() {
      this._video.removeEventListener(`timeupdate`, this.__handleTimeUpdate);
      this._video.removeEventListener(`canplaythrough`, this._handleCanPlayThrough);
      this._videoRef = null;
    }

    _calculateRemainingTime() {
      return Math.floor(this._duration - this._video.currentTime);

    }

    _calculateProgress() {
      return this._video.currentTime / this._duration * 100;
    }

    _handleFullscreenButtonClick() {

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

    _handleCanPlayThrough() {
      this._duration = this._video.duration;
      this.__handleTimeUpdate();
      this._handlePlayButtonClick();
    }

    _handlePlayButtonClick() {
      this._video.play();
      this.setState({
        isPlaying: true,
      });
    }

    _handlePauseButtonClick() {
      this._video.pause();
      this.setState({
        isPlaying: false,
      });
    }

    _handleExitButtonClick() {
      this._video.load();
      this.setState({
        isPlaying: false,
      });
      this.props.onExitButtonClick();
    }

    __handleTimeUpdate() {
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
          onExitButtonClick={this._handleExitButtonClick}
          onPauseButtonClick={this._handlePauseButtonClick}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullscreenButtonClick={this._handleFullscreenButtonClick}
        />
      );
    }
  }

  WithVideoPlayerControls.propTypes = {
    onExitButtonClick: PropTypes.func.isRequired,
  };

  return WithVideoPlayerControls;
}
