import React from 'react';
import Main from "../main/main.jsx";

const handlerMovieCardClick = () => {};

const App = (props) => {
  const {movieDescription, moviesList} = props;

  return (
    <Main
      description={movieDescription}
      movies={moviesList}
      onMovieCardClick={handlerMovieCardClick}
    />
  );
};

App.propTypes = {
  movieDescription: Main.propTypes.description,
  moviesList: Main.propTypes.movies,
  onMovieCardClick: Main.propTypes.onMovieCardClick
};

export default App;
