import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../../video-player/video-player";
import {Link} from "react-router-dom";
import movieShape from "../../../types/movie";

const MovieSmallCard = ({movie, isPlaying = false, onMouseHover}) => {

  return (
    <article
      onMouseEnter={() => {
        onMouseHover(movie);
      }}
      onMouseLeave={() => {
        onMouseHover(null);
      }}
      className="small-movie-card catalog__movies-card">
      <Link to={`/movies/${movie.id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          <VideoPlayer isPlaying={isPlaying} src={movie.preview} poster={movie.img}/>
        </div>
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link">{movie.title}</span>
        </h3>
      </Link>
    </article>
  );
};

MovieSmallCard.propTypes = {
  movie: movieShape,
  isPlaying: PropTypes.bool,
  onMouseHover: PropTypes.func
};


export default MovieSmallCard;
