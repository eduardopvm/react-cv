import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export default function Personal(props) {
  return (
    <React.Fragment>
      <Typography variant="h5">Profile</Typography>
      <Divider />
      <Typography>{props.profileText}</Typography>
    </React.Fragment>
  );
}
