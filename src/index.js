import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import yaml from "js-yaml";

import App from "./App";

// fetch("pt-br.yaml")
//   .then((resp) => resp.text())
//   .then((text) => {
//     parsedData = yaml.load(text);
//     console.log(parsedData);
//   });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
  rootElement
);
