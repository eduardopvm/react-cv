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
import CVHeader from "./header/CVHeader";
import CVAvatar from "./header/CVAvatar";
import Sidebar from "./sidebar/Sidebar";
import MainContent from "./main_content/MainContent";

import cvDataPT from "./data/cv_data_pt.json";
import cvDataEN from "./data/cv_data_en.json";
import cvDataStatic from "./data/cv_data_static.json";

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: "1rem"
  }
}));

export default function App() {
  const [cvData, setData] = useState(cvDataPT);
  const printComponent = useRef();
  const [t, i18n] = useTranslation();
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
    content: () => printComponent.current
  });

  return (
    <Container>
      <Header handleLanguageChange={handleDataChange} handlePagePrint={handlePagePrint} />
      <Paper elevation={5} component="main">
        <Grid container ref={printComponent} style={{ paddingTop: "1rem" }}>
          <Grid container item xs={4}>
            <CVAvatar />
          </Grid>
          <Grid container item xs={8}>
            <CVHeader data={cvDataStatic.contact} />
          </Grid>
          <Grid item xs={4}>
            <Sidebar
              staticData={cvDataStatic}
              translatedData={cvData}
            />
          </Grid>
          <Grid item xs={8}>
            <MainContent data={cvData} />
          </Grid>
        </Grid>
      </Paper>
      
      <Grid container justify="center" className={classes.footer} component="footer">
        <Box>
          <Typography variant="caption" color="textSecondary" align="center" component="div">
            {t("footerDescription")}
          </Typography>
          <Typography variant="caption" color="textSecondary" align="center" component="div">
            {t("footerSource")}
            <Link href={cvDataStatic.source_url} target="_blank">GitHub</Link>
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}
