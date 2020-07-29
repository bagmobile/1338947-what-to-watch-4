import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.connect";
import MovieCard from "../movie-card/movie-card.jsx";
import MovieHeader from "../movie-header/movie-header.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";
import Copyright from "../copyright/copyright.jsx";
import withActivePage from "../../hocs/with-active-page";
import MoviePageDescription from "../movie-page-description/movie-page-description.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import {Tab} from "../../consts";
import movieShape from "../../types/movie";
import movieReviewShape from "../../types/movie-review";
import MenuButton from "../menu-button/menu-button.jsx";

const MoviePageDescriptionWithActivePage = withActivePage(MoviePageDescription);

class MovieInfo extends PureComponent {

  componentDidMount() {
    const {loadReviews, movieId} = this.props;
    loadReviews(movieId);
  }

  componentDidUpdate(prevProps) {
    const {loadReviews, movieId} = this.props;

    if (prevProps.movie && prevProps.movie.id !== movieId) {
      loadReviews(movieId);
    }
  }

  render() {
    const {movies, movie, reviews, isAuthorized, isFetching, toggleFavorite} = this.props;

    if (isFetching) {
      return (`Please wait ...`);
    }

    const {backgroundColor} = movie;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full" style={{backgroundColor}}>
          <div className="movie-card__hero">

            <MovieHeader movie={movie}/>

            <header className="page-header movie-card__head">
              <Logo/>
              <UserBlock/>
            </header>

            <MovieCard movie={movie}>
              <MenuButton movieId={movie.id} isFavorite={movie.isFavorite} toggleFavorite={toggleFavorite}>
                {isAuthorized && <a href="#" className="btn movie-card__button">Add review</a>}
              </MenuButton>
            </MovieCard>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">

              <MoviePoster movie={movie}/>

              <div className="movie-card__desc">
                <MoviePageDescriptionWithActivePage movie={movie} initialActivePage={Tab.OVERVIEW} reviews={reviews}/>
              </div>

            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">

            <MoviesList movies={movies}>
              <h2 className="catalog__title">More like this</h2>
            </MoviesList>

          </section>

          <footer className="page-footer">
            <Logo/>
            <Copyright/>
          </footer>

        </div>
      </React.Fragment>
    );
  }
}


MovieInfo.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  movie: movieShape,
  reviews: PropTypes.arrayOf(movieReviewShape),
  loadReviews: PropTypes.func,
  isAuthorized: PropTypes.bool,
  loadMovies: PropTypes.func,
  isFetching: PropTypes.bool,
  movieId: PropTypes.number,
  toggleFavorite: PropTypes.func,
};

export default MovieInfo;

