import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import {PromoMovie} from "../../mocks/promo-movie.js";
import MovieInfo from "../movie-info/movie-info.jsx";

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {movie: null};
    this._handleSmallMovieCardClick = this._handleSmallMovieCardClick.bind(this);
  }

  _handleSmallMovieCardClick(currentMovie) {
    this.setState({movie: currentMovie});
  }

  _renderMain() {
    const {movies} = this.props;

    return (
      <Main
        movies={movies}
        promoMovie={PromoMovie}
        onSmallMovieCardClick={this._handleSmallMovieCardClick}
      />
    );
  }

  _renderMovieInfo() {
    const {movies} = this.props;
    return (
      <MovieInfo
        movies={movies.filter((item) => item !== this.state.movie)}
        movie={this.state.movie} // TODO не работает сразу по маршруту
        onSmallMovieCardClick={this._handleSmallMovieCardClick}
      />
    );
  }

  render() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this.state.movie ? this._renderMovieInfo() : this._renderMain()}
        </Route>
        <Route exact path="/movie-overview">
          {this._renderMovieInfo()}
        </Route>
      </Switch>
    </BrowserRouter>);
  }

}

App.propTypes = {
  movies: Main.propTypes.movies
};

export default App;
