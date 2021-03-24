import React from "react";
import Grid from "@material-ui/core/Grid";

import ProfissionalProfile from "./ProfissionalProfile";
import WorkHistory from "./WorkHistory";

export default function MainContent(props) {
  return (
    <Grid item xs={12}>
      <ProfissionalProfile profileText={props.data.profile} />
      <WorkHistory history={props.data.history} />
    </Grid>
  );
}
