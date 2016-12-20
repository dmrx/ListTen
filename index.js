import { render } from "react-dom";
import React from "react";
import App from "./components/App";
import Bootstrap from './node_modules/bootstrap/dist/css/bootstrap.css';
import styles from './static/styles.css';

const containerEl = document.getElementById("container");

render(
  <App/>,
  containerEl
);