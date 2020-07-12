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
  getMoviesGenres,
  getPartFilteredMoviesByGenre,
  getPromoMovie,
  getVisibilityShowMoreButton
} from "../../selectors";
import MovieGenresList from "../movie-genres-list/movie-genres-list.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import {ActionCreator} from "../../reducer";

const Main = ({promoMovie, movies, genres, isVisibleShowMoreButton, onShowMoreButtonClick}) => {

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

          <MovieGenresList genres={genres}/>
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
  onShowMoreButtonClick: PropTypes.func
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
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

