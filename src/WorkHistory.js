import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import WorkHistoryItem from "./WorkHistoryItem";

export default function WorkHistory(props) {
  const workHistory = [];
  props.history.map((list, index) => {
    workHistory.push(
      <WorkHistoryItem history={props.history[index]} key={index} />
    );
  });

  return (
    <Grid item xs={9}>
      <Typography variant="h5">Work History</Typography>
      <Divider />
      <Box>{workHistory}</Box>
    </Grid>
  );
}
