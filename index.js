// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/App';

// // uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

// render(
//   <App />,
//   document.getElementById('root')
// );

import { render } from "react-dom";
import React from "react";
import App from "./components/App";

const containerEl = document.getElementById("container");

render(
  <App/>,
  containerEl
);