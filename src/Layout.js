import React from "react";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Layout(props) {
  console.log("Props: ", props);
  return (
    <React.Fragment>
      <Header data={props.data.contact} />
      <Grid container>
        <Sidebar data={props.data}/>
        <MainContent data={props.data} />
      </Grid>
    </React.Fragment>
  );
}
