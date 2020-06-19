import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {movie: null};
  }


  render() {
    const {movies = []} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <SmallMovieCard
            key={index}
            movie={movie}
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
  movies: PropTypes.arrayOf(SmallMovieCard.propTypes.movie)
};

export default MoviesList;
