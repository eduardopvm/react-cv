import React, { useState } from "react";

import Layout from "./Layout";
import cvDataPT from "./data/cv_data_pt.json";
import cvDataEN from "./data/cv_data_en.json";

export default function App() {
  const [cvData, setData] = useState(cvDataPT);
  
  function handleDataChange(lang) {
    if (lang == 'pt') {
      setData(cvDataPT);
    } else {
      setData(cvDataEN);
    }
  }

  return (
    <React.Fragment>
      <Layout data={cvData} handleLanguageChange={handleDataChange}/>
    </React.Fragment>
  );
}
