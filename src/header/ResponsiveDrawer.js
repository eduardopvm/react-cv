import React from "react"
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "240px",
  }
}));

export default function ResponsiveDrawer(props) {
  const classes = useStyles();

  return (
    <nav>
      <Hidden smUp>
        <Drawer
          container={document.body}
          variant="temporary"
          anchor="left"
          open={props.drawerOpen}
          onClose={props.onDrawerToggle}
          classes={{
            paper: classes.drawer,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          LOL
        </Drawer>
      </Hidden>
    </nav>
  );
}
