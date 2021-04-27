import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import InfoPanel from "./InfoPanel";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginLeft: "1rem",
  },
}));

export default function CVHeader(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Box displayPrint="none">
        <Typography variant="h3" className={classes.heading}>
          Eduardo Palma Vieira de Moraes
        </Typography>
      </Box>
      <Box display="none" displayPrint="block">
        <Typography variant="h4" className={classes.heading}>
          Eduardo Palma Vieira de Moraes
        </Typography>
      </Box>
      <Typography variant="h4" className={classes.heading} color="textSecondary">
        Full Stack Developer
      </Typography>
      <InfoPanel contact={props.data} />
    </Grid>
  );
}
