import React from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import CVHeader from "../header/CVHeader";
import CVAvatar from "../header/CVAvatar";
import Sidebar from "../sidebar/Sidebar";
import WorkHistory from "./WorkHistory";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    paddingTop: "1rem",
    height: "100%",
  },
}));

const Content = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Grid container ref={ref} id="pdf-target" className={classes.contentContainer}>
      <Grid container item xs={4}>
        <CVAvatar />
      </Grid>
      <Grid container item xs={8}>
        <CVHeader data={props.staticData.contact} />
      </Grid>
      <Grid item xs={4}>
        <Sidebar
          staticData={props.staticData}
          translatedData={props.translatedData}
        />
      </Grid>
      <Grid item xs={8}>
        <WorkHistory history={props.translatedData.history} />
      </Grid>
    </Grid>
  );
});

export default Content;
