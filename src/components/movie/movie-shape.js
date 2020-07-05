import PropTypes from "prop-types";

const movieReviewShape = PropTypes.shape({
  author: PropTypes.string,
  dateTime: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  rating: PropTypes.number
});

const movieShape = PropTypes.shape({
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
  duration: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(movieReviewShape)
});

export {movieReviewShape};
export default movieShape;

