import React from "react";
import movieShape from "../components/movie/movie-shape";
import {Tab} from "../settings.js";
import MovieOverview from "../components/movie-overview/movie-overview.jsx";
import MovieDetails from "../components/movie-details/movie-details.jsx";
import MovieReviews from "../components/movie-reviews/movie-reviews.jsx";
import MovieInfoTab from "../components/movie-info-tab/movie-info-tab.jsx";

const withTabs = (Component) => {

  class WithTabs extends React.PureComponent {

    constructor(props) {
      super(props);

      this.state = {activeTab: Tab.OVERVIEW};
      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(tab) {
      this.setState({activeTab: tab});
    }

    _changeActiveTab() {
      const {movie} = this.props;

      switch (this.state.activeTab) {
        case Tab.OVERVIEW:
          return <MovieOverview movie={movie}/>;
        case Tab.DETAILS:
          return <MovieDetails movie={movie}/>;
        case Tab.REVIEWS:
          return <MovieReviews movie={movie}/>;
        default:
          return ``;
      }
    }

    render() {
      return (
        <Component
          {...this.props}
        >
          <MovieInfoTab
            activeTab={this.state.activeTab}
            onClickTab={this._handleTabClick}
          />
          {this._changeActiveTab()}
        </Component>
      );
    }

  }

  WithTabs.propTypes = {
    movie: movieShape
  };

  return WithTabs;
};

export default withTabs;
