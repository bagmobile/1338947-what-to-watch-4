import {getMovieById, isFetchingMovies} from "../../../reducer/data/selectors";
import {getMoviesLike} from "../../../reducer/movies-list/selectors";
import {isAuthorized} from "../../../reducer/user/selectors";
import {Operation} from "../../../reducer/data/data";
import {ActionCreator as ReviewActionCreator, Operation as ReviewOperation} from "../../../reducer/review/review";
import {connect} from "react-redux";
import MovieInfo from "./movie-info";
import {getReviews, isReviewFetching} from "../../../reducer/review/selectors";

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  const movie = getMovieById(state, id);

  return {
    movies: getMoviesLike(state, movie),
    movie,
    reviews: getReviews(state),
    isAuthorized: isAuthorized(state),
    isFetching: isFetchingMovies(state) || isReviewFetching(state),
    movieId: id
  };
};

const mapDispatchToProps = (dispatch) => ({
  onReviewsLoad: (movieId) => {
    dispatch(ReviewOperation.loadReviews(movieId));
  },
  onMoviesLoad: () => {
    dispatch(Operation.loadMovies());
  },
  onFavoriteToggle: (movie) => {
    dispatch(Operation.toggleFavorite(movie));
  },
  onResetReviewFetchingStatus: () => {
    dispatch(ReviewActionCreator.setReviewFetchingStatus(null));
  },
  onResetAddReviewFetchingStatus: () => {
    dispatch(ReviewActionCreator.setAddReviewFetchingStatus(null));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
