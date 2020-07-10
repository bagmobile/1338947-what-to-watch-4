import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withTabs from "./with-tabs.js";

Enzyme.configure({
  adapter: new Adapter(),
});

function MockComponent() {
  return <div/>;
}

const WrappedMockComponent = withTabs(MockComponent);

describe(`WithTabs e2e component`, () => {

  it(`WithTabs component click`, () => {

    const onClick = jest.fn();

    const wrappedComponent = mount(
        <WrappedMockComponent
          initialActiveTab={`Initial`}
          onTabClick={onClick}
        />
    );

    wrappedComponent.find(MockComponent).prop(`onTabClick`)(`New`);
    expect(wrappedComponent.state(`activeTab`)).toEqual(`New`);

  });
});
