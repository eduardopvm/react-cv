import React from "react";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import Sidebar from "./Sidebar";
import WorkHistory from "./WorkHistory";

export default function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Grid container>
        <Sidebar />
        <WorkHistory />
      </Grid>
    </React.Fragment>
  );
}
