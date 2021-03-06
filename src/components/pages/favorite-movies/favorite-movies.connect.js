import {Operation as DataOperation} from "../../../reducer/data/data";
import {connect} from "react-redux";
import FavoriteMovies from "./favorite-movies";
import {getFavoriteMovies, isFetchingMovies} from "../../../reducer/data/selectors";

const mapStateToProps = (state) => ({
  movies: getFavoriteMovies(state),
  isLoadMoviesStatusFetching: isFetchingMovies(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteMovies: () => {
    dispatch(DataOperation.loadFavoriteMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovies);
