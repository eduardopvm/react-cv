import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Header from "./header/Header";
import Content from "./main_content/Content";
import Footer from "./main_content/Footer";

import cvDataPT from "./data/cv_data_pt.json";
import cvDataEN from "./data/cv_data_en.json";
import cvDataStatic from "./data/cv_data_static.json";

export default function App() {
  const [cvData, setData] = useState(cvDataPT);
  const printComponentRef = useRef();

  function handleDataChange(lang) {
    if (lang == "pt") {
      setData(cvDataPT);
    } else {
      setData(cvDataEN);
    }
  }

  const handlePagePrint = useReactToPrint({
    documentTitle: "CV - Eduardo P V de Moraes",
    content: () => printComponentRef.current,
  });

  return (
    <Container>
      <Header handleLanguageChange={handleDataChange} handlePagePrint={handlePagePrint} />
      <Paper elevation={5} component="main">
        <Content ref={printComponentRef} staticData={cvDataStatic} translatedData={cvData} />
      </Paper>
      <Footer githubUrl={cvDataStatic.source_url} />
    </Container>
  );
}
