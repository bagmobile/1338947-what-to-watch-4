import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import Movie from "../movie/movie.jsx";

const RatingLevel = {
  [`Bad`]: [0, 3],
  [`Normal`]: [3, 5],
  [`Good`]: [5, 8],
  [`Very Good`]: [8, 10],
  [`Awesome`]: [10, 10]
};

const getRatingLevel = (ratingScore) => {
  // eslint-disable-next-line guard-for-in
  for (let ratingLevelKey in RatingLevel) {
    let [min, max] = RatingLevel[ratingLevelKey];
    if ((ratingScore >= min) && (ratingScore < max)) {
      return ratingLevelKey;
    }
  }
  return ``;
};

const MovieOverview = ({movies = [], movie, onSmallMovieCardClick}) => {
  const altPoster = `${movie.title} poster`;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.img} alt={movie.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.poster} alt={altPoster} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{movie.ratingScore}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{getRatingLevel(movie.ratingScore)}</span>
                  <span className="movie-rating__count">{movie.ratingCount}</span>
                </p>
              </div>

              <div className="movie-card__text">
                <React.Fragment>
                  {movie.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </React.Fragment>

                <p className="movie-card__director"><strong>{movie.director}</strong></p>

                <p className="movie-card__starring"><strong>{movie.starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList movies={movies} onSmallMovieCardClick={onSmallMovieCardClick}/>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  movies: MoviesList.propTypes.movies,
  movie: Movie.propTypes.movie,
  onSmallMovieCardClick: PropTypes.func
};

export default MovieOverview;
