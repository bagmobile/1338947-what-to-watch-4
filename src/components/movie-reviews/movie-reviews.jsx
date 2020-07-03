import React from "react";
import PropTypes from "prop-types";
import movieShape from "../movie/movie-shape.js";
import MovieReview from "../movie-review/movie-review.jsx";

const DEFAULT_COLUMN_COUNT = 2;

const sliceToColumn = (data, columns) => {
  let result = [];
  let size = Math.ceil(data.length / columns);
  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }
  return result;
};

const getReviewByColumn = (reviews, columns) => {

  return (
    <>
      {sliceToColumn(reviews, columns).map((columnReviews, index) => {
        return (
          <div
            key={index}
            className="movie-card__reviews-col">
            {columnReviews.map((review, item) => {
              return <MovieReview
                key={`${item}-${index}`}
                review={review}
              />;
            })}
          </div>);
      })}
    </>
  );
};

const MovieReviews = ({movie, columns = DEFAULT_COLUMN_COUNT}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      {getReviewByColumn(movie.reviews, columns)}
    </div>
  );
};

MovieReviews.propTypes = {
  movie: movieShape,
  columns: PropTypes.number
};

export default MovieReviews;
