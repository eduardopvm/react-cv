import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <Container fixed>
      {/* Full page grid container */}
      <Grid container>
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
    </Container>
  );
}
