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
    this.onEscClick = this.onEscClick.bind(this);
    this.onExitButtonClick = this.onExitButtonClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this.onEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this.onEscClick);
  }

  goBack() {
    return history.push(`${LinkPath.VIEW_MOVIE}/${this.props.movie.id}`);
  }

  onEscClick(evt) {
    if (evt.key === ESC) {
      this.goBack();
    }
  }

  onExitButtonClick() {
    this.goBack();
  }

  render() {
    const {movie} = this.props;
    if (!movie) {
      return (<Spinner/>);
    }
    return (<WrappedVideoPlayerContainer
      onExitButtonClick={this.onExitButtonClick}
      movie={movie}
    />
    );
  }
}

MovieFullScreen.propTypes = {
  movie: movieShape,
};

export default MovieFullScreen;
