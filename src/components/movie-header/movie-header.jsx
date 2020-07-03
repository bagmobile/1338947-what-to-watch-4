import movieShape from "../movie/movie-shape.js";
import React from "react";

const MovieHeader = ({movie}) => {
  return (
    <>
      <div className="movie-card__bg">
        <img src={movie.img} alt={movie.title}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
    </>
  );
};

MovieHeader.propTypes = {
  movie: movieShape,
};

export default MovieHeader;
