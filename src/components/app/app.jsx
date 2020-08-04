import React, {PureComponent} from "react";
import {Route, Router, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../pages/main/main.connect";
import MovieInfo from "../pages/movie-info/movie-info.connect";
import {LinkPath} from "../../consts";
import SignIn from "../pages/sign-in/sign-in.connect";
import FavoriteMovies from "../pages/favorite-movies/favorite-movies.connect";
import PrivateRoute from "../private-route/private-route.connect";
import MovieFullScreen from "../pages/movie-full-screen/movie-full-screen.connect";
import history from "../../history";
import AddReview from "../add-review/add-review.connect";
import withReviewForm from "../../hocs/with-review-form";
import withSignInForm from "../../hocs/with-sign-in-form";

class App extends PureComponent {

  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={LinkPath.INDEX} component={Main}/>
          <Route exact path={`${LinkPath.MOVIES}/:id`} component={MovieInfo}/>
          <Route exact path={LinkPath.LOGIN} component={withSignInForm(SignIn)}/>
          <PrivateRoute exact path={LinkPath.FAVORITE_MOVIES} component={FavoriteMovies}/>
          <PrivateRoute exact path={`${LinkPath.MOVIES}/:id${LinkPath.REVIEW}`} component={withReviewForm(AddReview)}/>
          <Route exact path={`${LinkPath.PLAYER}/:id`} component={MovieFullScreen}/>
        </Switch>
      </Router>
    );
  }

}

App.propTypes = {
  init: PropTypes.func.isRequired,
};

export default App;

