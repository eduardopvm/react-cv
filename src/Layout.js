import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useReactToPrint } from "react-to-print";
import { useTranslation } from "react-i18next";

import CVHeader from "./header/CVHeader";
import CVAvatar from "./header/CVAvatar";
import Sidebar from "./sidebar/Sidebar";
import MainContent from "./main_content/MainContent";
import React from "react";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0.5rem",
  },
  footer: {
    margin: "1rem"
  }
}));

export default function Layout(props) {
  const classes = useStyles();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [t, i18n] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    props.handleLanguageChange(lng);
  };

  return (
    // TODO: separate this top section into it's own component
    <Container fixed>
      <Grid container>
        <Grid item xs={6}>
          <Button
            onClick={handlePrint}
            variant="contained"
            color="primary"
            className={classes.button}>
            {t("printCV")}
          </Button>
        </Grid>
        <Grid container item xs={6} justify="flex-end">
          {i18n.language == "pt" ? (
            <React.Fragment>
              <Button
                onClick={() => changeLanguage("pt")}
                disabled
                className={classes.button}>
                Português
              </Button>
              <Button
                onClick={() => changeLanguage("en")}
                color="primary"
                className={classes.button}>
                English
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button
                onClick={() => changeLanguage("pt")}
                color="primary"
                className={classes.button}>
                Português
              </Button>
              <Button
                onClick={() => changeLanguage("en")}
                disabled
                className={classes.button}>
                English
              </Button>
            </React.Fragment>
          )}
        </Grid>
      </Grid>

      <Paper elevation={5} component="main" id="pdf-target">
        {/* Full page grid container */}
        <Grid container ref={componentRef} style={{ paddingTop: "1rem" }}>
          <Grid container item xs={4}>
            <CVAvatar />
          </Grid>
          <Grid container item xs={8}>
            <CVHeader data={props.staticData.contact} />
          </Grid>
          <Grid item xs={4}>
            <Sidebar
              staticData={props.staticData}
              translatedData={props.translatedData}
            />
          </Grid>
          <Grid item xs={8}>
            <MainContent data={props.translatedData} />
          </Grid>
        </Grid>
      </Paper>

      <Grid container justify="center" className={classes.footer}>
        <Box>
          <Typography variant="caption" color="textSecondary" align="center" component="div">
            {t("footerDescription")}
          </Typography>
          <Typography variant="caption" color="textSecondary" align="center" component="div">
            {t("footerSource")}
            <Link href={props.staticData.source_url} target="_blank">GitHub</Link>
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}
