import React from "react";
import moment from "moment";
import {ANONYMOUS_AUTHOR} from "../../consts";
import movieReviewShape from "../../types/movie-review";

const MovieReview = ({review}) => {
  const {quote, user, dateTime, rating = 0} = review;
  const {name: authorName = ANONYMOUS_AUTHOR} = user;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{quote}</p>

        <footer className="review__details">
          <cite className="review__author">{authorName}</cite>
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
