import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";

import Header from "../header/Header";
import Content from "./Content";
import Footer from "./Footer";

import cvDataPT from "../data/cv_data_pt.json";
import cvDataEN from "../data/cv_data_en.json";
import cvDataStatic from "../data/cv_data_static.json";

export default function Homepage() {
  const [cvData, setData] = useState(getData());
  const printComponentRef = useRef();

  function getData() {
    let queryParams = new URLSearchParams(useLocation().search);
    let lang = queryParams.get("lang");
    
    if (lang && lang == "en") {
      i18n.changeLanguage("en");
      return cvDataEN;
    }

    return cvDataPT;
  }

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
    <Router>
      <Switch>
        <Route exact path="/">
          <Container disableGutters>
            <Header handleLanguageChange={handleDataChange} handlePagePrint={handlePagePrint} />
            <Paper elevation={5} component="main">
              <Content ref={printComponentRef} staticData={cvDataStatic} translatedData={cvData} />
            </Paper>
            <Footer githubUrl={cvDataStatic.source_url} />
          </Container>
        </Route>
        <Route path="/pdf">
          <Content ref={printComponentRef} staticData={cvDataStatic} translatedData={cvData} />
        </Route>
      </Switch>
    </Router>
  );
}