import React from "react";
import {movieReviewShape} from "../movie/movie-shape.js";
import moment from "moment";
import {ANONYMOUS_AUTHOR} from "../../settings";

const MovieReview = ({review}) => {
  const {quote, author = ANONYMOUS_AUTHOR, dateTime, rating = 0} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{quote}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date"
            dateTime={moment(dateTime).format(`YYYY-MM-DD`)}>
            {moment(dateTime).format(`LL`)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

MovieReview.propTypes = {
  review: movieReviewShape
};

export default MovieReview;
