import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useReactToPrint } from "react-to-print";
import { useTranslation } from "react-i18next";

import Header from "./header/Header";
import Content from "./main_content/Content";
import Footer from "./main_content/Footer";
import CVHeader from "./header/CVHeader";
import CVAvatar from "./header/CVAvatar";
import Sidebar from "./sidebar/Sidebar";
import MainContent from "./main_content/MainContent";

import cvDataPT from "./data/cv_data_pt.json";
import cvDataEN from "./data/cv_data_en.json";
import cvDataStatic from "./data/cv_data_static.json";

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: "1rem",
  },
  contentContainer: {
    paddingTop: "1rem",
    height: "100%",
  },
}));

export default function App() {
  const [cvData, setData] = useState(cvDataPT);
  const [t, i18n] = useTranslation();
  const printComponentRef = useRef();
  const classes = useStyles();

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
