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
      // credentials: "omit",
      headers: {
        // "Content-Type": "application/pdf",
        Accept: "application/pdf",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res;
      })
      .then((res) => console.log("PDF: ", res));
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
