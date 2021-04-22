import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0.5rem",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

//TODO: improve error handling
//TODO: make API url dynamic
//TODO: make PDF use correct language

export default function Header(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [t, i18n] = useTranslation();

  const pdfUrl = "http://localhost:5000/pdf";

  const onPagePrint = () => {
    props.handlePagePrint();
  };

  const onPdfExport = () => {
    setLoading(true);
    fetch(`${pdfUrl}?lang=${i18n.language}`, {
      method: "GET",
      mode: "cors",
      cache: "no-store",
      // credentials: "omit",
      headers: {
        // "Content-Type": "application/pdf",
        Accept: "application/pdf",
      },
    })
      .then((res) => {
        if (!res.ok) {
          console.error("Error downloading PDF", res);
        }
        return res.blob();
      })
      .then((blob) => {
        // TODO: fix this hack somehow?
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `CV - Eduardo P V de Moraes.pdf`;
        link.click();
        setLoading(false);
      });
  };

  const onChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    props.handleLanguageChange(lng);
  };

  return (
    <Grid container component="header">
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid item xs={6}>
        <Button
          onClick={onPagePrint}
          variant="contained"
          color="primary"
          className={classes.button}>
          {t("printCV")}
        </Button>
        <Button
          onClick={onPdfExport}
          variant="contained"
          color="primary"
          className={classes.button}>
          {t("exportToPDF")}
        </Button>
      </Grid>
      <Grid container item xs={6} justify="flex-end">
        {i18n.language == "pt" ? (
          <React.Fragment>
            <Button
              onClick={() => onChangeLanguage("pt")}
              disabled
              className={classes.button}>
              Português
            </Button>
            <Button
              onClick={() => onChangeLanguage("en")}
              color="primary"
              className={classes.button}>
              English
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button
              onClick={() => onChangeLanguage("pt")}
              color="primary"
              className={classes.button}>
              Português
            </Button>
            <Button
              onClick={() => onChangeLanguage("en")}
              disabled
              className={classes.button}>
              English
            </Button>
          </React.Fragment>
        )}
      </Grid>
    </Grid>
  );
}
