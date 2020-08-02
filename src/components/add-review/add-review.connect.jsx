import {connect} from "react-redux";
import {getMovieById, isFetchingMovies} from "../../reducer/data/selectors";
import {AddReview} from "./add-review";
import {getUserProfile} from "../../reducer/user/selectors";
import {Operation} from "../../reducer/review/review";
import {
  getMessage,
  isAddReviewFetching,
  isErrorAddReviewFetching,
  isSuccessAddReviewsFetching
} from "../../reducer/review/selectors";

const mapStateToProps = (state, ownProps) => ({
  movie: getMovieById(state, Number(ownProps.match.params.id)),
  userProfile: getUserProfile(state),
  isFetching: isAddReviewFetching(state),
  isSuccessFetching: isSuccessAddReviewsFetching(state),
  isErrorFetching: isErrorAddReviewFetching(state),
  message: getMessage(state),
  isLoadMoviesStatusFetching: isFetchingMovies(state)
});

const mapDispatchToProps = (dispatch) => ({
  addReview: (movieId, rating, review) => {
    dispatch(Operation.addReview(movieId, rating, review));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
