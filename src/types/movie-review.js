import PropTypes from "prop-types";

const movieReviewShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  rating: PropTypes.number,
  dateTime: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
});
export default movieReviewShape;
