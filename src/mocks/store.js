import NameSpace from "../reducer/name-space";
import {mockMovies} from "./movies";
import {mockReviews} from "./movie-review";
import {AuthorizationStatus, DEFAULT_GENRE, DEFAULT_MOVIE_LIST_SIZE} from "../consts";
import UserProfile from "../models/user-profile";

export const testStore = {
  [NameSpace.DATA]: {
    movies: mockMovies,
    promoMovie: mockMovies[0],
    reviews: mockReviews
  },
  [NameSpace.MOVIES_LIST]: {
    activeGenre: DEFAULT_GENRE,
    currentMovieListSize: DEFAULT_MOVIE_LIST_SIZE
  },
  [NameSpace.USER]: {
    userProfile: new UserProfile({}),
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authorizationErrorMessage: ``
  }
};
