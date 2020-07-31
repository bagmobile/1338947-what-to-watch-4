import {connect} from "react-redux";
import MovieFullScreen from "./movie-full-screen";
import {getMovieById} from "../../../reducer/data/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    movie: getMovieById(state, Number(ownProps.match.params.id))
  };
};

export default connect(mapStateToProps)(MovieFullScreen);
