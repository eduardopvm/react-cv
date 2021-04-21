import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0.5rem",
  },
}));

//TODO: add loading when generating PDF and improve error handling
//TODO: make API url dynamic

export default function Header(props) {
  const classes = useStyles();
  const [t, i18n] = useTranslation();

  const onPagePrint = () => {
    props.handlePagePrint();
  };

  const onPdfExport = () => {
    fetch("http://localhost:5000/pdf", {
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
      });
  };

  const onChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    props.handleLanguageChange(lng);
  };

  return (
    <Grid container>
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
