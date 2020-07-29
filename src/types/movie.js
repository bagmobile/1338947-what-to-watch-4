import PropTypes from "prop-types";

const movieShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ratingScore: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
});

export default movieShape;
