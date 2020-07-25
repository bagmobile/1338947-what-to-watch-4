import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation as DataOperation} from "../reducer/data/data.js";


export default function withLoader(Component) {

  class WithLoader extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isMoviesLoading: true,
        isPromoMovieLoading: true,
      };
    }

    _loadData() {
      const {loadPromoMovie, loadMovies} = this.props;
      loadPromoMovie(() => {
        this.setState({
          isPromoMovieLoading: false
        });
      });
      loadMovies(() => {
        this.setState({
          isMoviesLoading: false
        });
      });
    }

    render() {
      const {isMoviesLoading, isPromoMovieLoading} = this.state;
      this._loadData();
      return (
        (!isMoviesLoading && !isPromoMovieLoading)
          ? <Component
            {...this.props}
          />
          : `Please wait ....`
      );
    }
  }

  WithLoader.propTypes = {
    loadPromoMovie: PropTypes.func.isRequired,
    loadMovies: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    loadMovies: (onSuccess) => dispatch(DataOperation.loadMovies(onSuccess)),
    loadPromoMovie: (onSuccess) => dispatch(DataOperation.loadPromoMovie(onSuccess)),
  });

  return connect(null, mapDispatchToProps)(WithLoader);

}
