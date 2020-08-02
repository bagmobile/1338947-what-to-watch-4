import React from "react";
import PropTypes from "prop-types";
import UserBlock from "../user-block/user-block.connect";
import Logo from "../logo/logo";
import {Link, Redirect} from "react-router-dom";
import {extend} from "../../utils/common";
import {CommentLength, LinkPath, RatingLevel} from "../../consts";
import movieShape from "../../types/movie";
import Spinner from "react-spinner-material";
import MovieHeader from "../movie/movie-header/movie-header";
import MoviePoster from "../movie/movie-poster/movie-poster";

class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      review: ``,
    };
    this.submitRef = React.createRef();
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(evt) {
    const newState = extend(this.state, ((element) => {
      switch (element.type) {
        case `radio`:
          return {rating: parseInt(element.value, 10)};
        case `textarea`:
          return {review: element.value};
      }
      return {};
    })(evt.target));

    this.setState(newState);

    this.submitRef.current.disabled = (
      newState.rating < RatingLevel.MIN ||
      newState.rating > RatingLevel.MAX ||
      newState.review.length < CommentLength.MIN ||
      newState.review.length > CommentLength.MAX
    );
  }

  render() {
    const {movie, message, addReview, isFetching, isSuccessFetching, isErrorFetching, isLoadMoviesStatusFetching} = this.props;

    if (isLoadMoviesStatusFetching) {
      return (<Spinner/>);
    }
    if (isSuccessFetching) {
      return <Redirect to={`${LinkPath.VIEW_MOVIE}/${movie.id}`}/>;
    }

    return (
      <section className="movie-card movie-card--full" style={{backgroundColor: movie.backgroundColor}}>
        <div className="movie-card__header">
          <MovieHeader movie={movie}/>

          <header className="page-header">
            <Logo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${LinkPath.VIEW_MOVIE}/${movie.id}`} className="breadcrumbs__link">{movie.title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock/>
          </header>

          <MoviePoster movie={movie} customClass={`movie-card__poster--small`}/>

        </div>

        <div className="add-review">
          <form action="#" className="add-review__form"
            style={isFetching ? {pointerEvents: `none`, opacity: 0.6} : {}}
            onChange={this._handleInputChange}
            onKeyPress={this._handleInputChange}
            onSubmit={(evt) => {
              evt.preventDefault();
              addReview(movie.id, this.state.rating, this.state.review);
            }}
          >
            <fieldset disabled={isFetching}>
              <div className="add-review__error-message">
                <p>{isErrorFetching && message}</p>
              </div>

              <div className="rating">
                <div className="rating__stars">
                  <input className="rating__input" id="star-0" type="radio" name="rating" value="0"
                    autoComplete="off"
                    defaultChecked={true}/>

                  <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
                    autoComplete="off"/>
                  <label className="rating__label" htmlFor="star-1">Rating 1</label>

                  <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
                    autoComplete="off"/>
                  <label className="rating__label" htmlFor="star-2">Rating 2</label>

                  <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
                    autoComplete="off"/>
                  <label className="rating__label" htmlFor="star-3">Rating 3</label>

                  <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
                    autoComplete="off"/>
                  <label className="rating__label" htmlFor="star-4">Rating 4</label>

                  <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
                    autoComplete="off"/>
                  <label className="rating__label" htmlFor="star-5">Rating 5</label>
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text"
                  minLength={50}
                  maxLength={400}
                  placeholder="Review text"/>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit" disabled={true} ref={this.submitRef}>Post</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    );

  }
}

AddReview.propTypes = {
  movie: movieShape.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isSuccessFetching: PropTypes.bool.isRequired,
  isErrorFetching: PropTypes.bool.isRequired,
  message: PropTypes.string,
  addReview: PropTypes.func.isRequired,
  isLoadMoviesStatusFetching: PropTypes.bool.isRequired,
};

export {AddReview};
