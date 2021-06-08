import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
  button: {
    margin: "0.5rem",
  },
}));

export default function CVAvatar(props) {
  const classes = useStyles();

  return (
    <Grid container item justify="center" alignItems="center">
      <Box displayPrint="none">
        <Avatar alt="Foto de Eduardo P. V. de Moraes" className={classes.avatar} src={process.env.PUBLIC_URL + "/gray_avatar.jpg"} />
      </Box>
      <Box display="none" displayPrint="block">
        <Avatar className={classes.avatar} variant="square" src={process.env.PUBLIC_URL + "/qr-code.png"} />
      </Box>
    </Grid>
  );
}
