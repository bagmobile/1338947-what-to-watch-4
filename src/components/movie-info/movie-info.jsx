import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import MovieHeader from "../movie-header/movie-header.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";
import Copyright from "../copyright/copyright.jsx";
import withActivePage from "../../hocs/with-active-page";
import MoviePageDescription from "../movie-page-description/movie-page-description.jsx";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list.jsx";
import {getMovieById, getReviews} from "../../reducer/data/selectors";
import {getMoviesLike} from "../../reducer/movies-list/selectors";
import {Tab} from "../../consts";
import movieShape from "../../types/movie";
import {Operation} from "../../reducer/data/data";
import movieReviewShape from "../../types/movie-review";

const MoviePageDescriptionWithActivePage = withActivePage(MoviePageDescription);

class MovieInfo extends PureComponent {

  componentDidMount() {
    const {loadReviews, movie} = this.props;
    loadReviews(movie.id);
  }

  componentDidUpdate(prevProps) {
    const {loadReviews, movie} = this.props;
    if (prevProps.movie.id !== movie.id) {
      loadReviews(movie.id);
    }
  }

  render() {
    const {movies, movie, reviews} = this.props;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">

            <MovieHeader movie={movie}/>

            <header className="page-header movie-card__head">
              <Logo/>
              <UserBlock/>
            </header>

            <MovieCard
              movie={movie}
              renderReviewButton={() => {
                return (<a href="#" className="btn movie-card__button">Add review</a>);
              }}
            />
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
  loadReviews: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  const movie = ownProps.movie || getMovieById(state, Number(ownProps.match.params.id));
  return {
    movies: getMoviesLike(state, movie),
    movie,
    reviews: getReviews(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (movieId) => {
    dispatch(Operation.loadReviews(movieId));
  }
});

export {MovieInfo};
export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
