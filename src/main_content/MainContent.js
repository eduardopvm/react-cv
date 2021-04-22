import React from "react";
import Grid from "@material-ui/core/Grid";

import WorkHistory from "./WorkHistory";

export default function MainContent(props) {
  return (
    <Grid item xs={12}>
      <WorkHistory history={props.data.history} />
    </Grid>
  );
}
