import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {testStore} from "../../mocks/store";
import {StaticRouter} from "react-router-dom";
import {ErrorMessage, SuccessMessage} from "../../consts";
import {AddReview} from "./add-review";
import React from "react";
import {mockMovies} from "../../mocks/movies";


const mockStore = configureStore([]);

it(`Should AddReview render correctly if movies loading`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Provider store={store}>
          <StaticRouter>
            <AddReview
              movie={mockMovies[0]}
              isFetching={false}
              isSuccessFetching={false}
              isErrorFetching={false}
              addReview={() => {
              }}
              isLoadMoviesStatusFetching={true}/>
          </StaticRouter>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should AddReview render correctly if load with errors`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Provider store={store}>
          <StaticRouter>
            <AddReview
              movie={mockMovies[0]}
              isFetching={false}
              isSuccessFetching={false}
              isErrorFetching={true}
              addReview={() => {
              }}
              isLoadMoviesStatusFetching={false}
              message={ErrorMessage.INVALID_USER_DATA}/>
          </StaticRouter>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should AddReview render correctly if is fetching add review`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Provider store={store}>
          <StaticRouter>
            <AddReview
              movie={mockMovies[0]}
              isFetching={true}
              isSuccessFetching={false}
              isErrorFetching={false}
              addReview={() => {
              }}
              isLoadMoviesStatusFetching={false}
            />
          </StaticRouter>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should AddReview render correctly if is fetching success`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Provider store={store}>
          <StaticRouter>
            <AddReview
              movie={mockMovies[0]}
              isFetching={false}
              isSuccessFetching={true}
              isErrorFetching={false}
              addReview={() => {
              }}
              isLoadMoviesStatusFetching={false}
              message={SuccessMessage.ADD_REVIEW}
            />
          </StaticRouter>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
