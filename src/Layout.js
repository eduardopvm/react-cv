import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import i18n from "i18next";
import { useRef } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useReactToPrint } from 'react-to-print';
import { useTranslation } from 'react-i18next';

import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import React from "react";

// TODO: refactor this
const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  button: {
    margin: "0.5rem"
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
  };

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={6}>
          <Button onClick={handlePrint} variant="contained" color="primary" className={classes.button}>{t('printCV')}</Button>
        </Grid>
        <Grid container item xs={6} justify="flex-end">
          {i18n.language == 'pt'
            ? (
              <React.Fragment>
                <Button onClick={() => changeLanguage('pt')} disabled className={classes.button}>Português</Button>
                <Button onClick={() => changeLanguage('en')} color="primary" className={classes.button}>English</Button>
              </React.Fragment>
            )
            : (
              <React.Fragment>
                <Button onClick={() => changeLanguage('pt')} color="primary" className={classes.button}>Português</Button>
                <Button onClick={() => changeLanguage('en')} disabled className={classes.button}>English</Button>
              </React.Fragment>
            )
          }
        </Grid>
      </Grid>
      
      <Paper elevation={5} component="main">
        {/* Full page grid container */}
        <Grid container ref={componentRef} style={{ paddingTop: "1rem"}}>
          <Grid container item xs={4}>
            <Grid container item justify="center" alignItems="center">
              <Avatar alt="Foto do Perfil" className={classes.large}>
                EPVM
              </Avatar>
            </Grid>
          </Grid>
          <Grid container item xs={8}>
            <Header data={props.data.contact} />
          </Grid>
          <Grid item xs={4}>
            <Sidebar data={props.data} />
          </Grid>
          <Grid item xs={8}>
            <MainContent data={props.data} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
