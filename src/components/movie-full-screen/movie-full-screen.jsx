import {ESC} from "../../consts";
import React from "react";
import PropTypes from "prop-types";
import movieShape from "../../types/movie";

class MovieFullScreen extends React.Component {

  constructor(props) {
    super(props);
    this._handlerEscClick = this._handlerEscClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this._handlerEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this._handlerEscClick);
  }

  _handlerEscClick(evt) {
    if (evt.key === ESC) {
      this.props.history.goBack();
    }
  }

  render() {
    const {movie} = this.props;

    if (!movie) {
      return (
        <h2>Loading...</h2>
      );
    }
    return (<>
        <div className="player">
          <video
            className="player__video"
            autoPlay={true}
            loop={true}
            src={movie.videoFull}
            poster={movie.src}
            muted={false}
            controls={true}
          />
          <button type="button" className="player__exit" onClick={() => {
            this.props.history.goBack();
          }}>Exit
          </button>
        </div>
      </>
    );
  }
}

MovieFullScreen.propTypes = {
  movie: movieShape,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired
};

export default MovieFullScreen;
