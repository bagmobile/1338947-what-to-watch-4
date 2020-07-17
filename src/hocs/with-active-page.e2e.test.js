import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActivePage from "./with-active-page.js";

Enzyme.configure({
  adapter: new Adapter(),
});

function MockComponent() {
  return <div/>;
}

const WrappedMockComponent = withActivePage(MockComponent);

describe(`WithTabs e2e component`, () => {

  it(`WithTabs component click`, () => {

    const onClick = jest.fn();

    const wrappedComponent = mount(
        <WrappedMockComponent
          initialActivePage={`Initial`}
          onClick={onClick}
        />
    );

    wrappedComponent.find(MockComponent).prop(`onClick`)(`New`);
    expect(wrappedComponent.state(`activePage`)).toEqual(`New`);

  });
});
