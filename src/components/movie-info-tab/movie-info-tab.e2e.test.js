import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieInfoTab from "./movie-info-tab.jsx";
import {Tab} from "../../settings.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieInfoTab e2e component`, () => {

  it(`Component onClick and Details is default`, () => {
    const onClick = jest.fn((currentTab) => currentTab);
    const customDefaultTab = Tab.DETAILS;

    const moveInfoTab = shallow(
        <MovieInfoTab
          activeTab={customDefaultTab}
          onClickTab={onClick}
        />
    );

    const tabItems = moveInfoTab.find(`.movie-nav__item`);

    tabItems.forEach((tabItem) => {
      tabItem.simulate(`click`);
    });

    expect(onClick).not.toHaveBeenCalledWith(Tab.DETAILS);

    const tabsAnswer = Object.values(Tab).filter((item) => item !== customDefaultTab);
    onClick.mock.results.forEach((result, index) => {
      expect(result.value).toBe(tabsAnswer[index]);
    });

    expect(onClick).toHaveBeenCalledTimes(tabItems.length - 1);
  });
});
