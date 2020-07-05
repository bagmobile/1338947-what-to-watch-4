import React from "react";
import movieShape from "../movie/movie-shape.js";

const RatingLevel = {
  "Bad": [0, 3],
  "Normal": [3, 5],
  "Good": [5, 8],
  "Very Good": [8, 10],
  "Awesome": [10, 10]
};

const getRatingLevel = (ratingScore) => {
  // eslint-disable-next-line guard-for-in
  for (let ratingLevelKey in RatingLevel) {
    let [min, max] = RatingLevel[ratingLevelKey];
    if ((ratingScore >= min) && (ratingScore < max)) {
      return ratingLevelKey;
    }
  }
  return null;
};

const MovieOverview = ({movie}) => {

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(movie.ratingScore)}</span>
          <span className="movie-rating__count">{movie.ratingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        {movie.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <p className="movie-card__director"><strong>{movie.director}</strong></p>
        <p className="movie-card__starring"><strong>
          {movie.starring.join(`, `)}
        </strong></p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  movie: movieShape
};

export default MovieOverview;
