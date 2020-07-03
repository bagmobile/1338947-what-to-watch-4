import React from "react";
import {movieReviewShape} from "../movie/movie-shape.js";
import moment from "moment";

const MovieReview = ({review}) => {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.quote}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date"
            dateTime={moment(review.dateTime).format(`YYYY-MM-DD`)}>
            {moment(review.dateTime).format(`LL`)}
          </time>
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
