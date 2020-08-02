import {ESC, LinkPath} from "../../../consts";
import React from "react";
import movieShape from "../../../types/movie";
import Spinner from "react-spinner-material";
import withVideoPlayerControls from "../../../hocs/with-video-player-controls";
import VideoPlayerContainer from "../../video-container/video-player-container/video-player-container";
import history from "../../../history";

const WrappedVideoPlayerContainer = withVideoPlayerControls(VideoPlayerContainer);

class MovieFullScreen extends React.Component {

  constructor(props) {
    super(props);
    this._handleEscClick = this._handleEscClick.bind(this);
    this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
  }

  _goBack() {
    return history.push(`${LinkPath.VIEW_MOVIE}/${this.props.movie.id}`);
  }

  _handleEscClick(evt) {
    if (evt.key === ESC) {
      this._goBack();
    }
  }

  _handleExitButtonClick() {
    this._goBack();
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this._handleEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this._handleEscClick);
  }

  render() {
    const {movie} = this.props;
    if (!movie) {
      return (<Spinner/>);
    }
    return (<WrappedVideoPlayerContainer
      onExitButtonClick={this._handleExitButtonClick}
      movie={movie}
    />
    );
  }
}

MovieFullScreen.propTypes = {
  movie: movieShape,
};

export default MovieFullScreen;
