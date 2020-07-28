import {getMovieById, getReviews, isFetchingMovies} from "../../reducer/data/selectors";
import {getMoviesLike} from "../../reducer/movies-list/selectors";
import {isAuthorized} from "../../reducer/user/selectors";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";
import MovieInfo from "./movie-info.jsx";

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  const movie = getMovieById(state, id);

  return {
    movies: getMoviesLike(state, movie),
    movie,
    reviews: getReviews(state),
    isAuthorized: isAuthorized(state),
    isFetching: isFetchingMovies(state),
    movieId: id
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (movieId) => {
    dispatch(Operation.loadReviews(movieId));
  },
  loadMovies: () => {
    dispatch(Operation.loadMovies());
  },
  toggleFavorite: (movieId) => {
    dispatch(Operation.toggleFavorite(movieId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
