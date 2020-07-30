import {
  getActiveGenre,
  getPartFilteredMoviesByGenre,
  getVisibilityShowMoreButton,
} from "../../reducer/movies-list/selectors";
import {getMoviesGenres, getPromoMovie, isFetchingMovies, isFetchingPromoMovie} from "../../reducer/data/selectors";
import {ActionCreator} from "../../reducer/movies-list/movies-list";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";
import Main from "./main";

const mapStateToProps = (state) => {
  return {
    movies: getPartFilteredMoviesByGenre(state),
    genres: getMoviesGenres(state),
    activeGenre: getActiveGenre(state),
    promoMovie: getPromoMovie(state),
    isVisibleShowMoreButton: getVisibilityShowMoreButton(state),
    isFetchingData: isFetchingMovies(state) || isFetchingPromoMovie(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showMoreMovies());
  },
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onFavoriteToggle: (movie) => {
    dispatch(Operation.toggleFavorite(movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
