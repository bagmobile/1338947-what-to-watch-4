import configureStore from "redux-mock-store";
import NameSpace from "@reducer/name-space";
import {testUserStore} from "@utils/test-data";
import {Provider} from "react-redux";
import SignIn from "@components/sign-in/sign-in.connect";
import {MemoryRouter} from "react-router-dom";

it(`Should SignIn render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.USER]: testUserStore
  });
  let tree;

  window.act(() => {
    tree = window.create(
        <MemoryRouter>
          <Provider store={store}>
            <SignIn/>
          </Provider>
        </MemoryRouter>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
