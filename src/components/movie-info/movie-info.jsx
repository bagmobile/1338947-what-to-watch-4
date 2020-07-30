import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block.connect";
import MovieCard from "../movie-card/movie-card";
import MovieHeader from "../movie-header/movie-header";
import MoviePoster from "../movie-poster/movie-poster";
import Copyright from "../copyright/copyright";
import withActivePage from "../../hocs/with-active-page";
import MoviePageDescription from "../movie-page-description/movie-page-description";
import MoviesList from "../movies-list/movies-list";
import {Tab} from "../../consts";
import movieShape from "../../types/movie";
import movieReviewShape from "../../types/movie-review";
import MenuButton from "../menu-button/menu-button";
import Spinner from "react-spinner-material";

const MoviePageDescriptionWithActivePage = withActivePage(MoviePageDescription);

class MovieInfo extends PureComponent {

  componentDidMount() {
    const {onReviewsLoad, movieId} = this.props;
    onReviewsLoad(movieId);
  }

  componentDidUpdate(prevProps) {
    const {onReviewsLoad, movieId} = this.props;

    if (prevProps.movie && prevProps.movie.id !== movieId) {
      onReviewsLoad(movieId);
    }
  }

  render() {
    const {movies, movie, reviews, isAuthorized, isFetching, onFavoriteToggle} = this.props;

    if (isFetching) {
      return (<Spinner/>);
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
              <MenuButton movie={movie} onFavoriteToggle={onFavoriteToggle}>
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
  onReviewsLoad: PropTypes.func,
  isAuthorized: PropTypes.bool,
  onMoviesLoad: PropTypes.func,
  isFetching: PropTypes.bool,
  movieId: PropTypes.number,
  onFavoriteToggle: PropTypes.func,
};

export default MovieInfo;

