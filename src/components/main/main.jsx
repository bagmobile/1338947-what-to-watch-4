import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import MovieHeader from "../movie-header/movie-header.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";
import Copyright from "../copyright/copyright.jsx";
import movieShape from "../movie/movie-shape";
import {
  DEFAULT_GENRE,
  DEFAULT_MOVIE_LIST_SIZE,
  getMoviesGenres,
  getPartFilteredMoviesByGenre,
  getPromoMovie,
  getVisibilityShowMoreButton
} from "../../selectors";
import MovieGenresList from "../movie-genres-list/movie-genres-list.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import {ActionCreator} from "../../reducer";
import withActivePage from "../../hocs/with-active-page";

const MoviesGenresListWithActivePage = withActivePage(MovieGenresList);

const Main = (props) => {
  const {promoMovie, movies, genres, isVisibleShowMoreButton, onShowMoreButtonClick, onChangeGenre} = props;

  return (
    <React.Fragment>
      <section className="movie-card">

        <MovieHeader movie={promoMovie}/>

        <header className="page-header movie-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <MovieCard
          movie={promoMovie}
          renderPoster={() => <MoviePoster movie={promoMovie}/>}
        />
      </section>

      <div className="page-content">
        <section className="catalog">

          <MoviesGenresListWithActivePage
            genres={genres}
            initialActivePage={DEFAULT_GENRE}
            onChangeGenre={onChangeGenre}/>
          <MoviesList movies={movies}/>
          {isVisibleShowMoreButton && <ShowMoreButton onClick={onShowMoreButtonClick}/>}

        </section>

        <footer className="page-footer">
          <Logo/>
          <Copyright/>
        </footer>

      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  genres: PropTypes.arrayOf(PropTypes.string),
  promoMovie: movieShape,
  currentMovieListSize: PropTypes.number,
  isVisibleShowMoreButton: PropTypes.bool,
  onShowMoreButtonClick: PropTypes.func,
  onChangeGenre: PropTypes.func
};

const mapStateToProps = (state) => {

  return {
    movies: getPartFilteredMoviesByGenre(state),
    genres: getMoviesGenres(state),
    promoMovie: getPromoMovie(state),
    isVisibleShowMoreButton: getVisibilityShowMoreButton(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showMoreMovies());
  },
  onChangeGenre(genre) {
    if (genre === DEFAULT_GENRE) {
      dispatch(ActionCreator.setCurrentMovieListSize(DEFAULT_MOVIE_LIST_SIZE));
    }
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

