import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import Personal from "./Personal";
import WorkHistoryItem from "./WorkHistoryItem";

export default function WorkHistory(props) {
  console.log("WorkHistory: ", props.history);
  return (
    <Grid item xs={9}>
      <Personal />
      <Typography variant="h5">Work History</Typography>
      <Divider />
      <WorkHistoryItem history={props.history[0]} />
    </Grid>
  );
}
