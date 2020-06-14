import React from 'react';
import PropTypes from 'prop-types';
import Main from "../main/main.jsx";

const App = (props) => {
  const {movieDescription, moviesList} = props;

  return (
    <Main
      description={movieDescription}
      movies={moviesList}
    />
  );
};

App.propTypes = {
  movieDescription: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  moviesList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
