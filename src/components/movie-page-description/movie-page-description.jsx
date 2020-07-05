import React from "react";
import PropTypes from "prop-types";
import movieShape from "../movie/movie-shape";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";

export const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const changeActiveTab = (movie, activeTab) => {

  switch (activeTab) {
    case Tab.OVERVIEW:
      return <MovieOverview movie={movie}/>;
    case Tab.DETAILS:
      return <MovieDetails movie={movie}/>;
    case Tab.REVIEWS:
      return <MovieReviews reviews={movie.reviews}/>;
    default:
      return null;
  }
};

const MoviePageDescription = ({movie, activeTab = Tab.OVERVIEW, onTabClick}) => {

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.keys(Tab).map((key, index) => {
            const activeTabClass = (activeTab === Tab[key]) && `movie-nav__item--active`;
            return (
              <li
                key={`nav-` + index}
                onClick={() => (activeTab !== Tab[key]) && onTabClick(Tab[key])}
                className={`movie-nav__item  ${activeTabClass}`}>
                <a href="#" className="movie-nav__link">{Tab[key]}</a>
              </li>);
          }
          )}
        </ul>
      </nav>
      {changeActiveTab(movie, activeTab)}
    </>
  );
};

MoviePageDescription.propTypes = {
  movie: movieShape,
  activeTab: PropTypes.oneOf(Object.values(Tab)),
  onTabClick: PropTypes.func
};

export default MoviePageDescription;
