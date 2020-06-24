import PropTypes from "prop-types";

const movieShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  poster: PropTypes.string,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  ratingScore: PropTypes.number,
  ratingCount: PropTypes.number,
  text: PropTypes.arrayOf.string,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired
});

export default movieShape;

