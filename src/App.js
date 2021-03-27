import React from "react";

import Layout from "./Layout";
import cvDataPT from "./data/cv_data_pt.json";
import cvDataEN from "./data/cv_data_en.json";

export default function App() {
  return (
    <React.Fragment>
      <Layout data={cvDataPT} />
    </React.Fragment>
  );
}
