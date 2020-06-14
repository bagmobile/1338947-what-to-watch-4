import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";

const MovieDescription = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      movieDescription={MovieDescription}
    />,
    document.querySelector(`#root`)
);
