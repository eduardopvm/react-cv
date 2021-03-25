import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

export default function ProfissionalProfile(props) {
  return (
    <Box>
      <Typography variant="h5">Profile</Typography>
      <Divider />
      <Typography variant="body1" component="div">
        <Box m={2}>{props.profileText}</Box>
      </Typography>
    </Box>
  );
}
