import React from "react";

import Layout from "./Layout";
import cvData from "./data/cv_data_pt-br.json";

export default function App() {
  return (
    <React.Fragment>
      <Layout data={cvData} />
    </React.Fragment>
  );
}
