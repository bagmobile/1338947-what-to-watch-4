import React from "react";
import {movieReviewShape} from "../movie/movie-shape.js";

const MovieReview = ({review}) => {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.quote}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={new Date(review.dateTime).toLocaleDateString()}>{review.dateTime}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

MovieReview.propTypes = {
  review: movieReviewShape
};

export default MovieReview;
