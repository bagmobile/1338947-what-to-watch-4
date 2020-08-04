import React from "react";
import {CommentLength, RatingLevel} from "../consts";

const withReviewForm = (Component) => {

  class WithReviewForm extends React.PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        review: ``,
        isValidate: false,
      };

      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleField(type, value) {
      switch (type) {
        case `radio`:
          return {rating: parseInt(value, 10)};
        case `textarea`:
          return {review: value};
        default:
          return {};
      }
    }

    _handleInputChange(evt) {
      this.setState(this._handleField(evt.target.type, evt.target.value));
      this.setState({isValidate: this._isValidate()});
    }

    _isValidate() {
      return this.state.rating >= RatingLevel.MIN &&
        this.state.rating <= RatingLevel.MAX &&
        this.state.review.length >= CommentLength.MIN &&
        this.state.review.length <= CommentLength.MAX;
    }

    render() {
      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          review={this.state.review}
          isValidate={this.state.isValidate}
          onChange={this._handleInputChange}
        />
      );
    }

  }

  return WithReviewForm;
};

export default withReviewForm;
