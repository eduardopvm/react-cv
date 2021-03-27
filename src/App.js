import React, { useState } from "react";

import Layout from "./Layout";
import cvDataPT from "./data/cv_data_pt.json";
import cvDataEN from "./data/cv_data_en.json";
import cvDataStatic from "./data/cv_data_static.json";

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
      <Layout translatedData={cvData} staticData={cvDataStatic} handleLanguageChange={handleDataChange}/>
    </React.Fragment>
  );
}
