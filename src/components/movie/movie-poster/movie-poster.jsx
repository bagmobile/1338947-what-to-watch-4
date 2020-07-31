import React from "react";
import movieShape from "../../../types/movie";

const MoviePoster = ({movie}) => {
  const altPoster = `${movie.title} poster`;

  return (<div className="movie-card__poster">
    <img src={movie.poster} alt={altPoster} width="218" height="327"/>
  </div>);

};

MoviePoster.propTypes = {
  movie: movieShape,
};

export default MoviePoster;
