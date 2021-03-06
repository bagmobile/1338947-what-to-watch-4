import React from "react";
import PropTypes from "prop-types";
import movieShape from "../../../types/movie";

const MoviePoster = ({movie, className}) => {
  const altPoster = `${movie.title} poster`;

  return (<div className={`movie-card__poster ${className}`}>
    <img src={movie.poster} alt={altPoster} width="218" height="327"/>
  </div>);

};

MoviePoster.propTypes = {
  movie: movieShape,
  className: PropTypes.string
};

export default MoviePoster;
