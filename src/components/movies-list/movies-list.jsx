import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import movieShape from "../movie/movie-shape.js";
import withMouseHoverMovieCard from "../../hocs/with-mouse-hover-movie-card.js";

const SmallMovieCardWrapped = withMouseHoverMovieCard(SmallMovieCard);

const MoviesList = (props) => {

  const {movies = [], onSmallMovieCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie, index) => (
        <SmallMovieCardWrapped
          key={index}
          movie={movie}
          onClick={onSmallMovieCardClick}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  onSmallMovieCardClick: PropTypes.func
};

export default MoviesList;
