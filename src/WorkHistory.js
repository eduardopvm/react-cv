import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Personal from "./Personal";

export default function WorkHistory(props) {
  return (
    <Grid item xs={9}>
      {/* <Box>{props.payload[0]}</Box> */}
      <Personal />
      <Typography variant="h5">Work History</Typography>
      <Divider />
      <Box>
        <Typography>KGB Secret Service - 1959 to 1989</Typography>
        <Typography color="textSecondary">Head of Intelligence</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu ligula sed tellus euismod sollicitudin vitae quis elit. Mauris at
          ligula varius nibh maximus tincidunt. Ut lacinia erat eget felis
          sollicitudin, eu venenatis ex ultrices. Donec nec molestie leo, vel
          viverra eros.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon style={{ fontSize: 10 }} />
            </ListItemIcon>
            <ListItemText>Lorem ipsum dolor sit amet</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon style={{ fontSize: 10 }} />
            </ListItemIcon>
            <ListItemText>Lorem ipsum dolor sit amet</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon style={{ fontSize: 10 }} />
            </ListItemIcon>
            <ListItemText>Lorem ipsum dolor sit amet</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon style={{ fontSize: 10 }} />
            </ListItemIcon>
            <ListItemText>Lorem ipsum dolor sit amet</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Grid>
  );
}
