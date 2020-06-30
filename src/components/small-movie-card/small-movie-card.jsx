import React from "react";
import PropTypes from "prop-types";
import movieShape from "../movie/movie-shape.js";
import VideoPlayer from "../video-player/video-player.jsx";

const SmallMovieCard = ({movie, onClick, isPlaying = false, onMouseHover}) => {

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
        <VideoPlayer muted isPlaying={isPlaying} src={movie.preview} poster={movie.poster}/>
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
  isPlaying: PropTypes.bool,
  onMouseHover: PropTypes.func
};

export default SmallMovieCard;
