import React from "react";
import PropTypes from "prop-types";
import MovieReview from "../movie-review/movie-review";
import {sliceArrayToColumn} from "../../utils/util";
import movieReviewShape from "../../types/movie-review";

const DEFAULT_COLUMN_COUNT = 2;

const getReviewByColumn = (reviews, columns) => {

  return (
    <>
      {sliceArrayToColumn(reviews, columns).map((columnReviews, index) => {
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

const MovieReviews = ({reviews, columns = DEFAULT_COLUMN_COUNT}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      {getReviewByColumn(reviews, columns)}
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(movieReviewShape),
  columns: PropTypes.number
};

export default MovieReviews;
