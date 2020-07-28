import React from "react";
import movieShape from "../../types/movie";

const MovieHeader = ({movie}) => {
  return (
    <>
      <div className="movie-card__bg">
        <img src={movie.background} alt={movie.title}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
    </>
  );
};

MovieHeader.propTypes = {
  movie: movieShape,
};

export default MovieHeader;
