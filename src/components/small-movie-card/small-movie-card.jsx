import React from "react";
import PropTypes from "prop-types";
import movieShape from "../movie/movie-shape.js";

const SmallMovieCard = ({movie, onClick, onMouseHover}) => {

  return (
    <article
      onMouseEnter={() => {
        onMouseHover(movie);
      }}
      onMouseLeave={() => {
        onMouseHover(null);
      }}
      onClick={() => {
        onClick(movie);
      }}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={movie.poster} alt={movie.title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#">{movie.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: movieShape,
  onClick: PropTypes.func,
  onMouseHover: PropTypes.func
};

export default SmallMovieCard;
