import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import {PromoMovie} from "../../mocks/promo-movie.js";
import MovieOverview from "../movie-overview/movie-overview.jsx";

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {movie: null};
  }

  _handlerSmallMovieCardClick(currentMovie) {
    this.setState({movie: currentMovie});
  }

  _renderMain() {
    const {movies} = this.props;

    return (
      <Main
        movies={movies}
        promoMovie={PromoMovie}
        onSmallMovieCardClick={this._handlerSmallMovieCardClick.bind(this)}
      />
    );
  }

  _renderMovieOverview() {
    const {movies} = this.props;
    return (
      <MovieOverview
        movies={movies}
        movie={this.state.movie}
        onSmallMovieCardClick={this._handlerSmallMovieCardClick.bind(this)}
      />
    );
  }

  _render() {
    return this.state.movie ? this._renderMovieOverview() : this._renderMain();
  }

  render() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._render()}
        </Route>
        <Route exact path="/movie-overview">
          {this._renderMovieOverview()}
        </Route>
      </Switch>
    </BrowserRouter>);
  }


}

App.propTypes = {
  movies: Main.propTypes.movies
};

export default App;
