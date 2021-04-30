import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useTranslation } from "react-i18next";
import { HashRouter as Router, Switch, Route, useLocation } from "react-router-dom";

import Header from "../header/Header";
import Content from "./Content";
import Footer from "./Footer";

import cvDataPT from "../data/cv_data_pt.json";
import cvDataEN from "../data/cv_data_en.json";
import cvDataStatic from "../data/cv_data_static.json";

// TODO: detect browser language instead of loading PT by default

export default function Homepage() {
  const [t, i18n] = useTranslation();
  const [cvData, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const printComponentRef = useRef();
  const searchParam = useLocation().search;

  useEffect(() => {
    setData(loadCVData());
    setIsLoaded(true);
  }, []);

  // For now this is only necessary for the PDF export feature
  // But it's already a preparation for loading the data from the API in the future
  function loadCVData() {
    let queryParams = new URLSearchParams(searchParam);
    let lang = queryParams.get("lang");

    if (lang && lang == "en") {
      i18n.changeLanguage("en");
      return cvDataEN;
    } else {
      return cvDataPT;
    }
  }

  function handleLanguageChange(lang) {
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

  if (!isLoaded) {
    return (
      <div>
        <Backdrop open={!isLoaded}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Container disableGutters>
              <Header handleLanguageChange={handleLanguageChange} handlePagePrint={handlePagePrint} history={cvData.history} />
              <Paper elevation={5} component="main" square>
                <Content ref={printComponentRef} staticData={cvDataStatic} translatedData={cvData} />
              </Paper>
              <Footer githubUrl={cvDataStatic.source_url} />
            </Container>
          </Route>
          <Route path="/pdf">
            <Content staticData={cvDataStatic} translatedData={cvData} pdf />
          </Route>
        </Switch>
      </Router>
    );
  }
}
