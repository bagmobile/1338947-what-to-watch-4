import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withReviewForm from "./with-review-form";

Enzyme.configure({
  adapter: new Adapter(),
});

function MockComponent() {
  return <div/>;
}

const WrappedMockComponent = withReviewForm(MockComponent);
let mockEventTextArea = {
  target: {
    type: `textarea`,
    value: `testtest`
  }
};
const mockEventRadio = {
  target: {
    type: `radio`,
    value: 3
  }
};
describe(`WithReviewForm e2e component`, () => {

  it(`WithReviewForm  component change rating`, () => {

    const onChange = jest.fn((evt) => evt);

    const wrappedComponent = mount(
        <WrappedMockComponent
          rating={0}
          onChange={onChange}
        />
    );

    wrappedComponent.find(MockComponent).prop(`onChange`)(mockEventRadio);
    wrappedComponent.update();
    expect(wrappedComponent.find(MockComponent).prop(`rating`)).toEqual(3);

  });

  it(`WithReviewForm  component change review`, () => {

    const onChange = jest.fn((evt) => evt);

    const wrappedComponent = mount(
        <WrappedMockComponent
          review={``}
          onChange={onChange}
        />
    );

    wrappedComponent.find(MockComponent).prop(`onChange`)(mockEventTextArea);
    wrappedComponent.update();
    expect(wrappedComponent.find(MockComponent).prop(`review`)).toEqual(`testtest`);

  });

  it(`WithReviewForm  component change isValidate false`, () => {

    const onChange = jest.fn((evt) => evt);

    const wrappedComponent = mount(
        <WrappedMockComponent
          onChange={onChange}
        />
    );

    wrappedComponent.find(MockComponent).prop(`onChange`)(mockEventRadio);
    wrappedComponent.update();
    expect(wrappedComponent.find(MockComponent).prop(`isValidate`)).toEqual(false);

    wrappedComponent.find(MockComponent).prop(`onChange`)(mockEventTextArea);
    wrappedComponent.update();
    expect(wrappedComponent.find(MockComponent).prop(`isValidate`)).toEqual(false);

  });

  it(`WithReviewForm  component change isValidate true`, () => {

    const onChange = jest.fn((evt) => evt);

    const wrappedComponent = mount(
        <WrappedMockComponent
          onChange={onChange}
        />
    );

    wrappedComponent.find(MockComponent).prop(`onChange`)(mockEventRadio);
    mockEventTextArea.target.value = `testtesttesttesttesttesttesttesttesttestteststtesttsttestt`;
    wrappedComponent.find(MockComponent).prop(`onChange`)(mockEventTextArea);
    wrappedComponent.update();
    expect(wrappedComponent.find(MockComponent).prop(`isValidate`)).toEqual(true);
  });

});
