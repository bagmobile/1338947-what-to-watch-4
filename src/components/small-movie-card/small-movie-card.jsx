import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {Link} from "react-router-dom";
import movieShape from "../../types/movie";

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
        <VideoPlayer isPlaying={isPlaying} src={movie.preview} poster={movie.img}/>
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
