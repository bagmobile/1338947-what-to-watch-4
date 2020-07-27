export default class ReviewModel {
  constructor(review) {
    this.id = review.id;
    this.quote = review.comment;
    this.user = {
      id: review.user.id,
      name: review.user.name
    };
    this.rating = review.rating;
    this.dateTime = review.date;
  }

  static parseReview(review) {
    return new ReviewModel(review);
  }

  static parseReviews(reviews) {
    return reviews.map(ReviewModel.parseReview);
  }
}
