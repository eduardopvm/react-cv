import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { useRef } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useReactToPrint } from 'react-to-print';

import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Container fixed>
      <Paper elevation={3}>
        {/* Full page grid container */}
        <Grid container ref={componentRef}>
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
      <button onClick={handlePrint}>Print CV</button>
    </Container>
  );
}
