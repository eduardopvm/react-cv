import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import LanguageChooser from "./LanguageChooser";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0.5rem",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const pdfUrl = "http://localhost:5000/pdf";

//TODO: break this up into multiple components, it's too complex
//TODO: make API url dynamic
//TODO: add support email to error message

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Header(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [errorHappened, showError] = useState(false);
  const [t, i18n] = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'), {noSsr: true});

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
        Accept: "application/pdf",
      },
    })
      .then((res) => {
        if (!res.ok) {
          console.error("Error downloading PDF", res);
          setLoading(false);
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
      })
      .catch((error) => {
        console.log("Error downloading PDF: " + error);
        setLoading(false);
        showError(true);
      });
  };

  const hideErrorMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    showError(false);
  };

  return (
    <AppBar position="static" elevation={0} color={isSmallScreen ? "primary" : "transparent"}>
      <Grid container>
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>

        <Snackbar
          open={errorHappened}
          onClose={hideErrorMessage}
          autoHideDuration={7000}>
          <Alert onClose={hideErrorMessage} severity="error">
            {t("exportToPDFError")}
          </Alert>
        </Snackbar>

        <Grid item xs={6}>
          {!isSmallScreen &&
            <Button
              onClick={onPagePrint}
              variant="contained"
              color="primary"
              className={classes.button}>
              {t("printCV")}
            </Button>
          }
          <Button
            onClick={onPdfExport}
            variant="contained"
            color={isSmallScreen ? "default" : "primary"}
            className={classes.button}>
            {t("exportToPDF")}
          </Button>
        </Grid>

        <Grid container item xs={6} justify="flex-end">
          <LanguageChooser handleLanguageChange={props.handleLanguageChange}/>
        </Grid>
      </Grid>
    </AppBar>
  );
}
