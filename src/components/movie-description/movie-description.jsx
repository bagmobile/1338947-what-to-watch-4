import React from "react";
import PropTypes from "prop-types";
import movieShape from "../movie/movie-shape.js";

const MovieDescription = (props) => {

  return (
    <div className="movie-card__desc">
      {props.children}
    </div>);

};

MovieDescription.propTypes = {
  children: PropTypes.oneOfType(
      [
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]
  ),
  movie: movieShape
};

export default MovieDescription;
