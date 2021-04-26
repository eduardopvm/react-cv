import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import MenuIcon from "@material-ui/icons/Menu";
import PrintIcon from "@material-ui/icons/Print";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { useTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import LanguageChooser from "./LanguageChooser";
import ResponsiveDrawer from "./ResponsiveDrawer";

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [t, i18n] = useTranslation();
  const theme = useTheme();

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

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <React.Fragment>
      <React.Fragment>
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
      </React.Fragment>

      <AppBar position="static" elevation={5} color="primary">
        <Toolbar>
          <Grid container item xs={12}>
            <Grid item xs={8}>
              <Box display={{ xs: "block", sm: "none" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleToggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </Box>

              <Box display={{ xs: "none", sm: "block" }}>
                <Button
                  onClick={onPagePrint}
                  startIcon={<PrintIcon />}
                  variant="contained"
                  color="secondary"
                  className={classes.button}>
                  {t("printCV")}
                </Button>
                <Button
                  onClick={onPdfExport}
                  startIcon={<PictureAsPdfIcon />}
                  variant="contained"
                  color="secondary"
                  className={classes.button}>
                  {t("exportToPDF")}
                </Button>
              </Box>
            </Grid>

            <Grid container item xs={4} justify="flex-end">
              <LanguageChooser handleLanguageChange={props.handleLanguageChange} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer onDrawerToggle={handleToggleDrawer} drawerOpen={drawerOpen} />
    </React.Fragment>
  );
}
