import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import InfoPanel from "./InfoPanel";

export default function Header(props) {
  return (
    <Grid item xs={12}>
      <Box displayPrint="none">
        <Typography variant="h3">Eduardo Palma Vieira de Moraes</Typography>
      </Box>
      <Box display="none" displayPrint="block">
        <Typography variant="h4">Eduardo Palma Vieira de Moraes</Typography>
      </Box>
      <Typography variant="h5" color="textSecondary">
        Full Stack Developer
      </Typography>
      <InfoPanel contact={props.data} />
    </Grid>
  );
}
