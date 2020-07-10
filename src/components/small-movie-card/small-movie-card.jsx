import React from "react";
import PropTypes from "prop-types";
import movieShape from "../movie/movie-shape.js";
import VideoPlayer from "../video-player/video-player.jsx";
import {Link} from "react-router-dom";

const SmallMovieCard = ({movie, isPlaying = false, onMouseHover}) => {

  return (
    <article
      onMouseEnter={() => {
        onMouseHover(movie);
      }}
      onMouseLeave={() => {
        onMouseHover(null);
      }}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <VideoPlayer isPlaying={isPlaying} src={movie.preview} poster={movie.poster}/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/movies/${movie.id}`} className="small-movie-card__link">{movie.title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: movieShape,
  isPlaying: PropTypes.bool,
  onMouseHover: PropTypes.func
};


export default SmallMovieCard;
