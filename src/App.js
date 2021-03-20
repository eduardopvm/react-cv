import React, { useEffect } from "react";
import Layout from "./Layout";

import yaml from "js-yaml";

export default function App() {
  useEffect(() => {
    fetch("pt-br.yaml")
      .then((resp) => resp.text())
      .then((text) => console.log(yaml.load(text)));
  });

  return (
    <React.Fragment>
      <Layout />
    </React.Fragment>
  );
}
