import React from "react";
import PropTypes from "prop-types";
import Movie from "../movie/movie.jsx";

const SmallMovieCard = ({movie, onClick, onMouseHover}) => {

  return (
    <article
      onMouseEnter={() => {
        onMouseHover(movie);
      }}
      onMouseLeave={() => {
        onMouseHover(null);
      }}
      className="small-movie-card catalog__movies-card">
      <div
        onClick={() => {
          onClick(movie);
        }}
        className="small-movie-card__image">
        <img src={movie.poster} alt={movie.title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={() => {
            onClick(movie);
          }}
          className="small-movie-card__link" href="#">{movie.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: Movie.propTypes.movie,
  onClick: PropTypes.func,
  onMouseHover: PropTypes.func
};

export default SmallMovieCard;
