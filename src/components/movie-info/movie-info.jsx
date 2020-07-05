import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import movieShape from "../movie/movie-shape.js";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import MovieHeader from "../movie-header/movie-header.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";
import Copyright from "../copyright/copyright.jsx";
import withTabs from "../../hocs/with-tabs";
import MoviePageDescription from "../movie-page-description/movie-page-description.jsx";

const MOVIE_LIST_BY_GENRE_SIZE = 4;
const MoviePageDescriptionWithTab = withTabs(MoviePageDescription);

const MovieInfo = ({movies = [], movie, onSmallMovieCardClick}) => {

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
              <MoviePageDescriptionWithTab movie={movie}/>
            </div>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList
            movies={movies}
            onSmallMovieCardClick={onSmallMovieCardClick}
            listSize={MOVIE_LIST_BY_GENRE_SIZE}
            genre={movie.genre}
          />

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
  movies: MoviesList.propTypes.movies,
  movie: movieShape,
  onSmallMovieCardClick: PropTypes.func
};

export default MovieInfo;
