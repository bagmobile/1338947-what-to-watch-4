import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";


Enzyme.configure({
  adapter: new Adapter(),
});


describe(`ShowMoreButton e2e component`, () => {

  it(`ShowMoreButton action click`, () => {
    const onClick = jest.fn((currentMovieListSize) => currentMovieListSize);

    const showMoreButtonComponent = shallow(
        <ShowMoreButton
          onClick={onClick}
        />
    );

    const showMoreButton = showMoreButtonComponent.find(`.catalog__button`);
    showMoreButton.simulate(`click`);

    expect(onClick).toHaveBeenCalled();

  });
});
