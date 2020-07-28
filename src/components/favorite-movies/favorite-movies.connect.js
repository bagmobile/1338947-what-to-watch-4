import {Operation as DataOperation} from "../../reducer/data/data";
import {connect} from "react-redux";
import FavoriteMovies from "./favorite-movies.jsx";
import {getFavoriteMovies} from "../../reducer/data/selectors";

const mapStateToProps = (state) => ({
  movies: getFavoriteMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteMovies: () => {
    dispatch(DataOperation.loadFavoriteMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovies);
