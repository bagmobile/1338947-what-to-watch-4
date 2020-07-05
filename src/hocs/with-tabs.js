import React from "react";
import movieShape from "../components/movie/movie-shape";
import {Tab} from "../components/movie-page-description/movie-page-description.jsx";

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

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onTabClick={this._handleTabClick}
        >
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
