import React from "react";
import PropTypes from "prop-types";
import movieShape from "../movie/movie-shape.js";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import MovieHeader from "../movie-header/movie-header.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";
import Copyright from "../copyright/copyright.jsx";
import withActivePage from "../../hocs/with-active-page";
import MoviePageDescription, {Tab} from "../movie-page-description/movie-page-description.jsx";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list.jsx";
import {getMovieById, getMoviesLike} from "../../selectors";

const MoviePageDescriptionWithActivePage = withActivePage(MoviePageDescription);

const MovieInfo = ({movies, movie}) => {

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
              return (<a href="add-review.html" className="btn movie-card__button">Add review</a>);
            }}
          />
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">

            <MoviePoster movie={movie}/>

            <div className="movie-card__desc">
              <MoviePageDescriptionWithActivePage movie={movie} initialActivePage={Tab.OVERVIEW}/>
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
};

MovieInfo.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  movie: movieShape
};

const mapStateToProps = (state, ownProps) => {
  const movie = ownProps.movie || getMovieById(state, Number(ownProps.match.params.id));
  return {
    movies: getMoviesLike(state, movie),
    movie
  };
};

export {MovieInfo};
export default connect(mapStateToProps)(MovieInfo);
