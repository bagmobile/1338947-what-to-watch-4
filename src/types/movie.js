import PropTypes from "prop-types";
import movieReviewShape from "./movie-review";

const movieShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  poster: PropTypes.string,
  preview: PropTypes.string,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  ratingScore: PropTypes.number,
  ratingCount: PropTypes.number,
  text: PropTypes.arrayOf.string,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf.string,
  duration: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(movieReviewShape)
});

export default movieShape;
