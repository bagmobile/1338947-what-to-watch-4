import React from 'react';
import Main from "../main/main.jsx";
import {PromoMovie} from "../../mocks/promo-movie.js";

const App = ({movies}) => {

  return (
    <Main
      movies={movies}
      promoMovie={PromoMovie}
    />
  );
};

App.propTypes = {
  movies: Main.propTypes.movies
};

export default App;
