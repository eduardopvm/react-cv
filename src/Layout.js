import React from "react";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import Sidebar from "./Sidebar";
import WorkHistory from "./WorkHistory";

export default function Layout(props) {
  console.log("layout props: ", props);
  return (
    <React.Fragment>
      <Header />
      <Grid container>
        <Sidebar />
        <WorkHistory history={props.data.history} />
      </Grid>
    </React.Fragment>
  );
}
