import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import movieShape from "../movie/movie-shape.js";

class MoviesList extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {movie: null};
  }


  render() {
    const {movies = [], onSmallMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <SmallMovieCard
            key={index}
            movie={movie}
            onClick={onSmallMovieCardClick}
            onMouseHover={(currentMovie)=>{
              this.setState({movie: currentMovie});
            }}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  onSmallMovieCardClick: PropTypes.func
};

export default MoviesList;
