import React from "react";
import PropTypes from "prop-types";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import {Tab} from "../../consts";
import movieShape from "../../types/movie";
import movieReviewShape from "../../types/movie-review";

const changeActivePage = (movie, activePage, reviews) => {

  switch (activePage) {
    case Tab.OVERVIEW:
      return <MovieOverview movie={movie}/>;
    case Tab.DETAILS:
      return <MovieDetails movie={movie}/>;
    case Tab.REVIEWS:
      return <MovieReviews reviews={reviews}/>;
    default:
      return null;
  }
};

const MoviePageDescription = ({movie, activePage = Tab.OVERVIEW, onClick, reviews}) => {

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.keys(Tab).map((key, index) => {
            const activePageClass = (activePage === Tab[key]) && `movie-nav__item--active`;
            return (
              <li
                key={`nav-` + index}
                className={`movie-nav__item  ${activePageClass}`}>
                <a
                  onClick={(evt) => {
                    evt.preventDefault();
                    return (activePage !== Tab[key]) && onClick(Tab[key]);
                  }}
                  href="#"
                  className="movie-nav__link">{Tab[key]}</a>
              </li>);
          }
          )}
        </ul>
      </nav>
      {changeActivePage(movie, activePage, reviews)}
    </>
  );
};

MoviePageDescription.propTypes = {
  movie: movieShape,
  reviews: PropTypes.arrayOf(movieReviewShape),
  activePage: PropTypes.oneOf(Object.values(Tab)),
  onClick: PropTypes.func
};

export default MoviePageDescription;
