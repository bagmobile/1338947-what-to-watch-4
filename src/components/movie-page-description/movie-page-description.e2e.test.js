import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviePageDescription from "./movie-page-description.jsx";
import {Tab} from "./movie-page-description";
import movies from "../../mocks/movies";

const movie = movies[0];

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {}
};

describe(`MoviePageDescription e2e component`, () => {

  it(`Component onClick and Details is default`, () => {
    const onClick = jest.fn((currentTab) => currentTab);
    const customDefaultTab = Tab.DETAILS;

    const moveInfoTab = shallow(
        <MoviePageDescription
          movie={movie}
          activeTab={customDefaultTab}
          onTabClick={onClick}
        />
    );

    const tabItems = moveInfoTab.find(`.movie-nav__link`);

    tabItems.forEach((tabItem) => {
      tabItem.simulate(`click`, mockEvent);
    });

    expect(onClick).not.toHaveBeenCalledWith(Tab.DETAILS);

    const tabsAnswer = Object.values(Tab).filter((item) => item !== customDefaultTab);
    onClick.mock.results.forEach((result, index) => {
      expect(result.value).toBe(tabsAnswer[index]);
    });

    expect(onClick).toHaveBeenCalledTimes(tabItems.length - 1);
  });
});
