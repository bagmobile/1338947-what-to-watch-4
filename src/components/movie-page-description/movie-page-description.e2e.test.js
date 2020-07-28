import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviePageDescription from "./movie-page-description.jsx";
import {mockMovies} from "../../mocks/movies";
import {Tab} from "../../consts";

const movie = mockMovies[0];

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
          activePage={customDefaultTab}
          onClick={onClick}
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
