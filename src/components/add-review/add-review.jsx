import React from "react";
import PropTypes from "prop-types";
import UserBlock from "../user-block/user-block.connect";
import Logo from "../logo/logo";
import {Link, Redirect} from "react-router-dom";
import {LinkPath} from "../../consts";
import movieShape from "../../types/movie";
import Spinner from "react-spinner-material";
import MovieHeader from "../movie/movie-header/movie-header";
import MoviePoster from "../movie/movie-poster/movie-poster";
import Rating from "../rating/rating";

const AddReview = (props) => {
  const {
    movie,
    message,
    addReview,
    isFetching,
    isSuccessFetching,
    isErrorFetching,
    isLoadMoviesStatusFetching,
    onChange,
    rating,
    review,
    isValidate,
  } = props;

  if (isLoadMoviesStatusFetching) {
    return (<Spinner/>);
  }
  if (isSuccessFetching) {
    return <Redirect to={`${LinkPath.MOVIES}/${movie.id}`}/>;
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
                <Link to={`${LinkPath.MOVIES}/${movie.id}`} className="breadcrumbs__link">{movie.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <MoviePoster movie={movie} className={`movie-card__poster--small`}/>

      </div>

      <div className="add-review">
        <form action="#" className="add-review__form"
          style={isFetching ? {pointerEvents: `none`, opacity: 0.6} : {}}
          onChange={onChange}
          onKeyPress={onChange}
          onSubmit={(evt) => {
            evt.preventDefault();
            addReview(movie.id, rating, review);
          }}
        >
          <fieldset disabled={isFetching}>
            <div className="add-review__error-message">
              <p>{isErrorFetching && message}</p>
            </div>

            <Rating/>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text"
                minLength={50}
                maxLength={400}
                placeholder="Review text"/>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={!isValidate}
                >Post
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  movie: movieShape,
  isFetching: PropTypes.bool,
  isSuccessFetching: PropTypes.bool,
  isErrorFetching: PropTypes.bool,
  message: PropTypes.string,
  addReview: PropTypes.func.isRequired,
  isLoadMoviesStatusFetching: PropTypes.bool,
  onChange: PropTypes.func,
  rating: PropTypes.number,
  review: PropTypes.string,
  isValidate: PropTypes.bool,
};

export {AddReview};
