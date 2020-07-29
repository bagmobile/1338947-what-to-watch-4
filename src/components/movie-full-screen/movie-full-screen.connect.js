import {connect} from "react-redux";
import MovieFullScreen from "../movie-full-screen/movie-full-screen.jsx";
import {getMovieById} from "../../reducer/data/selectors";

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.movieId || Number(ownProps.match.params.id);
  return {
    movie: getMovieById(state, id)
  };
};

export default connect(mapStateToProps)(MovieFullScreen);
